<template>
  <v-card class="mt-4 mx-auto" max-width="900" >
    <v-sheet v-for="(val, index) in value"
        :key="index"
      class="v-sheet--offset mx-auto"
      color="blue"
      elevation="12"
      max-width="calc(100% - 32px)"
    >{{val.rating}}
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    labels: [0, 1, 2, 3, 4, 5],
    value: []
  }),
  created() {
    this.initialize();
  },
  methods: {
    async initialize() {
      const rating = await this.$axios.$get("/api/rating");
      this.value = rating;
    }
  }
};
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
