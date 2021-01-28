var { Modelrating } = require("../models/ratingModel");

module.exports = {
  create: (obj, callbacks) => {
    const rating = new Modelrating(obj);
    rating.save(callbacks);
  },
  read: (callbacks) => {
    Modelrating.find().exec(callbacks);
  },readOne: async id => {
    let rating = await Modelrating.findOne({
      _id: id
    }).exec();
    return rating;
  },
}