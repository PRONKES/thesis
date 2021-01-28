var mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({
  rating: Number,
  comment:String,
});

const Modelrating = mongoose.model("rating", ratingSchema);

module.exports.Modelrating = Modelrating;
