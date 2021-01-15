const { Appointment } = require("../models/appointmentModel");
var { Activity } = require("../models/activityModel");

module.exports = {
  create: async (obj, callbacks) => {
    let { user, appointmentDate, place, numberOfPeople, activity } = obj;
    let actv = await Activity.findOne({ _id: activity });
    let price = actv.price * numberOfPeople;
    const app = new Appointment({
      user,
      appointmentDate,
      place,
      numberOfPeople,
      activity,
      price
    });
    app.save(callbacks);
  },
  read: (user, callbacks) => {
    Appointment.find({ user }).populate("activity","image description").populate("place","title").exec(callbacks);
  },
  delete: (id, callback) => {
    Appointment.findByIdAndRemove({ _id: id }).exec(callback);
  }
};
