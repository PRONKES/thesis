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
        <v-card style="height: 100%">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="`/api/images/${appointment.activity.image}`"
          >
          </v-img>
          <v-card-text class="text--primary">
            <v-card-title>{{ appointment.activity.description }}</v-card-title>
            <v-card-subtitle>{{ appointment.place.title }}</v-card-subtitle>
            <v-card-text>
              <div>
                <span class="font-weight-black">Date: </span
                >{{ appointment.appointmentDate }}
              </div>
              <div>
                <span class="font-weight-black">Number of people: </span
                >{{ appointment.numberOfPeople }}
              </div>
              <div>
                <span class="font-weight-black">Price: </span
                >{{ appointment.price }}$
              </div>
            </v-card-text>
          </v-card-text>

          <v-spacer></v-spacer>

          <v-card-actions style="justify-content: center">
            <v-btn
              color="primary"
              class="font-weight-black pa-3 ma-1"
              elevation="2"
              rounded
              @click="doPurchase(appointment)"
              >Pay Now</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    stripeHandler: {},
    appointments: [],
  }),
  mounted() {
    this.initialize();
  },
  methods: {
    async initialize() {
      const appointments = await this.$axios.$get("/api/appointment");
      this.appointments = appointments;
      this.stripeHandler = StripeCheckout.configure({
        key:
          "pk_test_51I7JK2JGJbW9PNmvQWMzVhyhW7ocVnU1NpmDpMo8JXqjKsPCScxCuVYbLEJh55koKUwpyzvjPmeXzxQnxjVstut300o1TN4Ssj",
        locale: "en",
        token: function (token) {
          console.log({ token });
        },
      });
    },
    doPurchase(appointment) {
      this.stripeHandler.open({
        amount: appointment.price * 100,
      });
    },
  },
};
</script>

<style>
</style>
