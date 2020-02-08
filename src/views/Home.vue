<template>
  <v-app id="inspire">
    <v-content>
      <v-card v-if="dashboard.length > 0">
        <p
          class="mt-0 align text-center text-no-wrap headline"
          v-if="dashboard.length > 0"
        >Dashboard</p>
        <v-container>
          <v-row>
            <v-col
              class="my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8"
              cols="12"
              xl="4"
              lg="4"
              v-for="(value, i) in dashboard"
              :key="i"
            >
              <dice-panel
                v-bind:sides="value.sides"
                v-bind:startAmount="value.amount"
                v-bind:startModifier="value.modifier"
                v-bind:id="value.id"
                v-bind:code="value.code"
                removable
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import DicePanel from "../components/DicePanel.vue";
export default {
  components: {
    DicePanel
  },
  props: {
    source: String
  },
  data: () => ({
    dashboard: []
  }),
  mounted() {
    if (localStorage.getItem("dashboard"))
      this.dashboard = JSON.parse(localStorage.getItem("dashboard"));
  }
};
</script>