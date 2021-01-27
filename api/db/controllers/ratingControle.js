var { Modelrating } = require("../models/ratingModel");

module.exports = {
  create: (obj, callbacks) => {
    const rating = new Modelrating(obj);
    rating.save(callbacks);
  },
  read: (callbacks) => {
    Modelrating.find().exec(callbacks);
  },
  update: (id, obj, callback) => {
    Modelrating.findOneAndUpdate(
      { _id: id },
      obj,
      callback
    );
  }
}