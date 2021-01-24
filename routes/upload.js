const express = require("express");
const router = express.Router();
const multer = require("multer");
const Image = require("../models/Image");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post("/", upload.single("avatar"), (req, res) => {
  let path =
    req.protocol +
    "://" +
    req.hostname +
    ":" +
    8000 +
    "/uploads/" +
    req.file.filename;
  let newImage = new Image({ imageName: path });
  console.log(newImage);
  newImage
    .save()
    .then((img) => res.status(201).send(img))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send(err);
    });
});

module.exports = router;
