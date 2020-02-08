<template>
  <v-container>
    <v-row class="flex-nowrap">
      <span class="mt-5">
        <v-icon x-large>{{this.iconPath}}</v-icon>
      </span>
      <v-form ref="form">
        <v-text-field
          class="mt-5"
          style="min-width: 50px"
          type="text"
          outlined
          dense
          v-model="amount"
          counter="6"
          maxlength="6"
          :rules="[rules.numberRule]"
          required
          @change="validate"
          @focus="validate"
          @input="validate"
        ></v-text-field>
      </v-form>

      <v-col v-if="this.code.charAt(0) == 'b' && !this.id" class="mt-2 headline">
        <v-form ref="sideForm">
          <v-row class="flex-nowrap">
            <p>b</p>
            <v-text-field
              style="min-width: 50px"
              type="text"
              outlined
              dense
              v-model="sides"
              counter="6"
              maxlength="6"
              :rules="[rules.numberRule, rules.bipyramid]"
              required
              @change="validate"
              @focus="validate"
              @input="validate"
            ></v-text-field>
            <p>+</p>
          </v-row>
        </v-form>
      </v-col>
      <v-col v-else-if="this.code.charAt(0) == 't' && !this.id" class="mt-2 headline">
        <v-form ref="sideForm">
          <v-row class="flex-nowrap">
            <p>t</p>
            <v-text-field
              style="min-width: 50px"
              type="text"
              outlined
              dense
              v-model="sides"
              counter="6"
              maxlength="6"
              :rules="[rules.numberRule, rules.trapezohedra]"
              required
              @change="validate"
              @focus="validate"
              @input="validate"
            ></v-text-field>
            <p>+</p>
          </v-row>
        </v-form>
      </v-col>
      <p class="mt-6 text-no-wrap headline" v-else>{{ this.code.charAt(0)}}{{ this.sides }}{{this.space}} +</p>
      <v-text-field
        class="mt-5"
        style="min-width: 50px"
        type="text"
        outlined
        dense
        v-model="modifier"
        counter="6"
        maxlength="6"
        :rules="[rules.numberRule]"
        @change="validate"
        @focus="validate"
        @input="validate"
      ></v-text-field>
      <p class="mt-6 headline">=</p>
      <v-text-field
        class="mt-5"
        style="min-width: 50px"
        type="text"
        outlined
        dense
        readonly
        @focus="validate"
        v-model="result"
      ></v-text-field>

      <v-col>
        <v-row>
          <v-btn
            rounded
            x-small
            class="mt-1 ml-1"
            color="success"
            @click="roll"
            :disabled="disableRoll"
          >Roll</v-btn>
        </v-row>
        <v-row>
          <v-btn
            rounded
            x-small
            class="mt-1 ml-1"
            color="error"
            v-if="removable"
            @click="remove"
          >Omit</v-btn>
          <v-btn
            rounded
            x-small
            class="mt-1 ml-1"
            color="primary"
            :disabled="disableRoll"
            v-else
            @click="save"
          >Save</v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
        <p class="error--text">{{this.message}}</p>
    </v-row>
  </v-container>
</template>

<script>
const uniqid = require("uniqid");
export default {
  props: {
    sides: Number,
    startAmount: Number,
    startModifier: Number,
    removable: Boolean,
    id: String,
    code: String
  },
  data: () => {
    return {
      rules: {
        numberRule: v => {
            if (!isNaN(parseFloat(v)) && v >= 0 && v.length <= 6) return true;
            return "";
        },
        bipyramid: v => {
            if (!isNaN(parseFloat(v)) && v > 8 && v % 4 == 0) return true;
            return "!";
        },
        trapezohedra: v => {
            if (!isNaN(parseFloat(v)) && v > 6 && v % 4 != 0 && v % 2 == 0) return true;
            return "!";
        }
      },
      space: "",
      message: "",
      amount: null,
      modifier: null,
      disableRoll: true,
      result: null,
      iconPath: "mdi-dice-d6"
    };
  },
  methods: {
    validate() {
      if ((this.code.charAt(0) == "b" || this.code.charAt(0) == "t") && !this.id) {
        this.disableRoll = !(
          this.$refs.form.validate() && this.$refs.sideForm.validate()
        );
      } else {
        this.disableRoll = !this.$refs.form.validate();
      }
      if (this.disableRoll) {
          if (this.code.charAt(0) == "b") {
                this.message = "Must be > 8 and / by 4.";
          } else if (this.code.charAt(0) == "t") {
              this.message = "Must be > 6 and / by 2 but not by 4.";
          }
      } else {
          this.message = "";
      }
    },
    roll() {
      if (this.amount) {
        if (!this.modifier) {
          this.result = 0;
          for (let i = 0; i < parseInt(this.amount); i++) {
            this.result += Math.ceil(Math.random() * parseInt(this.sides));
          }
        } else {
          this.result = 0;
          for (let i = 0; i < parseInt(this.amount); i++) {
            this.result +=
              Math.ceil(Math.random() * parseInt(this.sides)) +
              parseInt(this.modifier);
          }
        }
      }
    },
    save() {
      let dashboard = [];
      this.id = uniqid();
      let ids = [];
      if (localStorage.getItem("dashboard")) {
        dashboard = JSON.parse(localStorage.getItem("dashboard"));
      }
      if (localStorage.getItem("ids")) {
        ids = JSON.parse(localStorage.getItem("ids"));
      }
      ids.push(this.id);
      dashboard.push({
        sides: this.sides,
        amount: this.amount,
        modifier: this.modifier,
        code: this.code,
        id: this.id
      });
      localStorage.setItem("dashboard", JSON.stringify(dashboard));
      localStorage.setItem("ids", JSON.stringify(ids));
      this.$router.go(0);
      this.onTextChange();
    },
    remove() {
      let dashboard = [];
      if (localStorage.getItem("dashboard")) {
        dashboard = JSON.parse(localStorage.getItem("dashboard"));
      }

      // const item = dashboard.find(i => i.id === this.id);
      // const index = dashboard.indexOf(item);
      // .find, .filter, .match
      let ids = [];
      if (localStorage.getItem("ids")) {
        ids = JSON.parse(localStorage.getItem("ids"));
      }
      if (ids) {
        for (let i = 0; i < ids.length; i++) {
          if (this.id === ids[i]) {
            dashboard.splice(i, 1);
            ids.splice(i, 1);
          }
        }
      }
      localStorage.setItem("dashboard", JSON.stringify(dashboard));
      localStorage.setItem("ids", JSON.stringify(ids));
      this.$router.go(0);
    }
  },
  beforeMount() {
    if (this.code.charAt(0) == "b") {
      this.iconPath = "mdi-rhombus";
    } else if (this.code.charAt(0) == "t") {
      this.iconPath = "mdi-hexagon";
    } else if (this.code.charAt(0) == "d") {
      this.iconPath = `mdi-dice-d${this.sides}`;
    } else if (this.code.charAt(0) == "c") {
      if (this.code.length > 1)
        this.iconPath = `$c${this.sides}${this.code.charAt(1)}`;
      else this.iconPath = `$c${this.sides}`;
    }
    if (this.code.charAt(0) == "d" && this.sides < 10) {
        this.space = "\u2002";
    }
    if (this.code.charAt(0) == "c" && this.sides < 100) {
        this.space = "\u2007";
    }
  },
  mounted() {
    if (this.startAmount) {
      this.disableRoll = !this.$refs.form.validate();
      this.amount = this.startAmount;
      if (this.startModifier) {
        this.modifier = this.startModifier;
      }
    }
  }
};
</script>