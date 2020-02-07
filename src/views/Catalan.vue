<template>
  <v-container>
    <v-row align="start">
      <v-col class="my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8" cols="12" xl="4" lg="4">
        <dice-panel sides="12" code="ca" />
      </v-col>
      <v-col class="my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8" cols="12" xl="4" lg="4">
        <dice-panel sides="12" code="cb" />
      </v-col>
      <v-col class="my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8" cols="12" xl="4" lg="4">
        <dice-panel sides="24" code="ca" />
      </v-col>
      <v-col class="my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8" cols="12" xl="4" lg="4">
        <dice-panel sides="24" code="cb" />
      </v-col>
      <v-col class="my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8" cols="12" xl="4" lg="4">
        <dice-panel sides="24" code="cc" />
      </v-col>
      <v-col class="my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8" cols="12" xl="4" lg="4">
        <dice-panel sides="24" code="cd" />
      </v-col>
      <v-col class="my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8" cols="12" xl="4" lg="4">
        <dice-panel sides="30" code="c" />
      </v-col>
      <v-col class="my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8" cols="12" xl="4" lg="4">
        <dice-panel sides="48" code="c" />
      </v-col>
      <v-col class="my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8" cols="12" xl="4" lg="4">
        <dice-panel sides="60" code="ca" />
      </v-col>
      <v-col class="my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8" cols="12" xl="4" lg="4">
        <dice-panel sides="60" code="cb" />
      </v-col>
      <v-col class="my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8" cols="12" xl="4" lg="4">
        <dice-panel sides="60" code="cc" />
      </v-col>
      <v-col class="my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8"  cols="12" xl="4" lg="4">
        <dice-panel sides="60" code="cd" />
      </v-col>
      <v-col class="my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8" cols="12" xl="4" lg="4">
        <dice-panel sides="120" code="c" />
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
