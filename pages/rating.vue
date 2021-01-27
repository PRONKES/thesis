<template>
  <v-card class="elevation-16 mx-auto" width="300">
    <v-card-title class="headline">
      Rate Our Application
    </v-card-title>
    <v-card-text>
      If you enjoy using THE ESCAPER, please take a few seconds to rate your
      experience with us. It really helps!

      <div class="text-center mt-12">
        <v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
          large
        ></v-rating>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="justify-space-between">
      <v-btn color="primary" text>
        Rate Now
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    rating: 3.5
  }),
  methods: {
   async postRating(){
  await this.$axios.$post("/api/rating", this.rating)
    }
  }
};
</script>
