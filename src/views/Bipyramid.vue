<template>
  <v-container>
    <v-row align="start">
      <v-col class="my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8" cols="12" xl="4" lg="4">
        <dice-panel code="b"></dice-panel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DicePanel from "../components/DicePanel.vue";
export default {
  components: {
    DicePanel
  },
  props: {
    source: String
  }
};
</script>