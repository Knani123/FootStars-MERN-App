const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { json } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
// User register

router.post(
  "/",
  [
    body("name", "Name is empty ! ").notEmpty().isLength({ min: 2, max: 20 }),
    body("email", "Please enter valid email").isEmail(),
    body("phone", "Phone's number is only numeric").isNumeric(),
    body("password", "Password must contain alphabitic and numeric ")
      .notEmpty()
      .isAlphanumeric(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    } else {
      User.find({ email: req.body.email })
        .then((users) => {
          if (users.length) {
            return res
              .status(400)
              .send({ errors: [{ msg: "Email is already used" }] });
          } else {
            let newUser = new User({
              ...req.body,
              poste: "Quel est votre poste  ?  ",
              pied_fort: "Quel est votre pied fort?",
              age: 17,
              adress: "Tunis",
              notification: 1,
              avatar: `https://randomuser.me/api/portraits/men/${Math.floor(
                Math.random() * 99
              )}.jpg`,
            });
            bcrypt.genSalt(10, (err, salt) => {
              if (err) {
                throw err.message;
              } else {
                bcrypt.hash(req.body.password, salt, (err, hashpwd) => {
                  if (err) {
                    throw err.message;
                  } else {
                    newUser.password = hashpwd;
                    newUser.save();
                    let payload = { userId: newUser._id };
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
        })
        .catch((err) => console.log(err.message));
    }
  }
);

module.exports = router;
