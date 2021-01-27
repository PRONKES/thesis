var express = require("express");
var ratingControle = require("../db/controllers/ratingControle.js");

var router = express.Router();

router.route("/").post(function(req, res) {
  ratingControle.create(req.body, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});


router.route("/").get(function(req, res) {
  ratingControle.read((err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

router.route("/:id").put(function(req, res) {
  ratingControle.update(req.params.id, req.body, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

module.exports = router;