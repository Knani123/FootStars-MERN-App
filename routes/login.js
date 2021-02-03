const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const AuthMiddleware = require("../helpers/authMiddleware");

//login
router.post(
  "/",
  [body("email").isEmail(), body("password").notEmpty()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    } else
      User.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
          return res
            .status(400)
            .send({ errors: [{ msg: "You must register before" }] });
        } else {
          bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
            if (err) {
              throw err.message;
            } else if (!isMatch) {
              return res
                .status(400)
                .send({ errors: [{ msg: "wrong password" }] });
            } else {
              let payload = { userId: user._id };
              jwt.sign(payload, "123", (err, token) => {
                if (err) {
                  throw err.message;
                } else {
                  return res.status(200).send({ token });
                }
              });
            }
          });
        }
      });
  }
);

//get user
router.get("/", AuthMiddleware, (req, res) => {
  User.findById(req.userId)
    .select("-password -__v")
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      res.send(500).send({ msg: "Server Errors" });
    });
});
// get all user
router.get("/all", AuthMiddleware, (req, res) => {
  User.find()
    .select("-password -__v")
    .then((users) => res.status(200).send(users))
    .catch((err) => {
      res.send(500).send({ msg: "Server Errors" });
    });
});

//edit user
router.put("/", AuthMiddleware, (req, res) => {
  User.findByIdAndUpdate(req.userId, { $set: { ...req.body } }, (err, data) => {
    if (err) {
      return res.send(500).send({ msg: "Server Errors" });
    } else {
      User.findById(req.params.id)
        .then((user) => res.status(200).send(user))
        .catch((err) => {
          res.send(500).send({ msg: "Server Errors" });
        });
    }
  });
});
//edit by id notification
router.put("/user/not/:id", AuthMiddleware, (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    { $push: { notif: [req.body.notif] } },
    (err, data) => {
      if (err) {
        return res.status(500).send({ msg: "Server Errors" });
      } else {
        User.findById(req.params.id)
          .then((user) => {
            res.status(200).send(user);
          })
          .catch((err) => {
            res.status(500).send({ msg: "Server Errors" });
          });
      }
    }
  );
});

//edit by id message
router.put("/msg/:id", (req, res) => {
  console.log("route edit msg", req.body);

  User.findByIdAndUpdate(
    req.params.id,
    { $push: { msg: [req.body] } },
    (err, data) => {
      if (err) {
        return res.status(500).send({ msg: "Server Errors" });
      } else {
        User.findById(req.params.id)
          .then((user) => {
            res.status(200).send(user);
          })
          .catch((err) => {
            res.status(500).send({ msg: "Server Errors" });
          });
      }
    }
  );
});

//edit by id
router.put("/user/:id", AuthMiddleware, (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    { $set: { ...req.body } },
    (err, data) => {
      if (err) {
        return res.status(500).send({ msg: "Server Errors" });
      } else {
        User.findById(req.params.id)
          .then((user) => {
            res.status(200).send(user);
          })
          .catch((err) => {
            res.status(500).send({ msg: "Server Errors" });
          });
      }
    }
  );
});
module.exports = router;
