<template>
  <v-container>
      <v-row align-content="stretch" justify="center">
        <v-col
          v-for="(appointment, index) in appointments"
          :key="index"
          lg="4"
          sm="6"
          xs="12"
        >
          <v-card style="height:100%">
            <!-- <v-img
              class="white--text align-end"
              height="200px"
              :src="`/api/images/${appointment.image}`"
            >
            </v-img> -->
            <v-card-text class="text--primary">
              <div>Date:{{ appointment.appointmentDate }}</div>
              <div>Place:{{ appointment.place }}</div>
              <div>Number of people:{{ appointment.appointmentDate }}</div>
              <div>Place:{{ appointment.place }}</div>
            </v-card-text>

            <v-spacer></v-spacer>

            <v-card-actions>
              <v-btn color="warning" text @click="editItem(appointment)">
                edit
              </v-btn>

              <v-btn color="danger" text @click="deleteItem(appointment)">
                delete
              </v-btn>
              <v-spacer />
              <v-btn color="blue darken-1" text :to="`/places/${appointment._id}`">
                Add Places</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
