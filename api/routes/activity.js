var express = require("express");
var activityControl = require("../db/controllers/activityControl.js");
var router = express.Router();
var multer = require("multer");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./api/uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage });
router.post("/", upload.single("image"), function(req, res) {
  const obj = {
    image: req.file.originalname,
    description: req.body.description,
    price: req.body.price
  };

  activityControl.create(obj, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

router.route("/").get(function(req, res) {
  activityControl.read((err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});
router.route("/:id").get(function(req, res) {
  activityControl.readOne(req.params.id, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

router.put("/:id", upload.single("image"), function(req, res) {
  const obj = {
    description: req.body.description,
    price: req.body.price
  };
  if (req.file !== undefined) {
    obj.image = req.file.originalname;
  }

  activityControl.update(req.params.id, obj, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});
router.route("/:id").delete((req, res) => {
  activityControl.delete(req.params.id, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

module.exports = router;
