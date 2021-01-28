var mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  rating: Number,
  comment:String,
});

const Modelrating = mongoose.model("rating", ratingSchema);

module.exports.Modelrating = Modelrating;
