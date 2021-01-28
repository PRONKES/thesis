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
          <v-row justify="center">
            <v-avatar class="my-2 ml-8" size="100">
              <v-img :src="`/api/images/${user.image}`"></v-img>
            </v-avatar>
          </v-row>
          <v-card-title class="my-0" style="justify-content: center">{{
            user.username
          }}</v-card-title>
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
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["changeUser"]),
  }
}
</script>