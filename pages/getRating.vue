<template>
  <v-container class="ma-4">
    <div class="h1 text-center font-weight-bold font-italic"></div>
    <v-divider></v-divider>
    <v-row align-content="stretch" justify="center">
      <v-col lg="4" sm="6" xs="12">
        <v-card
       
          style="height: 100%"
          max-width="500px"
          class="pa-8"
        >
          <v-row justify="left">
            <v-avatar class="my-2 ml-8" size="50">
              <v-img :src="`/api/images/${user.image}`"></v-img>
            </v-avatar>
          </v-row>
          <v-card-subtitle class="ttr" style="justify-content: left" >{{
            user.username
          }}</v-card-subtitle>
           <v-col v-for="(rat, index) in rating"
        :key="index">
          <v-card-text class="text--primary" >
            
            <v-card-subtitle>{{ rat.comment }}</v-card-subtitle>
            <v-card-text>{{rat.rating}}</v-card-text>
            </v-card-text>
            </v-col>
        </v-card>
      </v-col>
      
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
export default {
  data: () => ({
    rating : []
  }),
  mounted() {
    this.initialize();
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["changeUser"]),
    async initialize() {
      const rating = await this.$axios.$get("/api/rating");
      this.rating = rating;
  }
}
}
</script>
<style scoped>
 .ttr{margin-top: -60px;
    margin-left:60px;}
</style>