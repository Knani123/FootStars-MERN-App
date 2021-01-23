const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../helpers/authMiddleware");
const { body, validationResult } = require("express-validator");
const Match = require("../models/Match");

//create match

router.post(
  "/",
  AuthMiddleware,
  [
    body(
      "name",
      "Name must contain only letters without spaces"
    ).isAlphanumeric(),
    body("format").notEmpty(),
    body("date").notEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    } else {
      Match.find({ name: req.body.name })
        .then((match) => {
          if (match.length) {
            return res.status(400).send({
              errors: [
                {
                  msg:
                    "Name existe, please check list of matchs or change name",
                },
              ],
            });
          } else {
            Match.find({ owner: req.userId }).then((match) => {
              if (match.length) {
                return res.status(400).send({
                  errors: [
                    {
                      msg: "You can only create one match",
                    },
                  ],
                });
              } else {
                let newMatch = new Match({ ...req.body, owner: req.userId });
                newMatch
                  .save()
                  .then((data) => res.status(200).send(data))
                  .catch((err) => console.log(err.message));
              }
            });
          }
        })
        .catch((err) => res.status(400).send(err));
    }
  }
);

//get all Matchs
router.get("/", AuthMiddleware, (req, res) => {
  Match.find()
    .sort({ _id: -1 })
    .then((matchs) => res.send(matchs))
    .catch((err) => res.status(500).send(err.msg));
});

//get user Matchs
router.get("/myMatch", AuthMiddleware, (req, res) => {
  Match.find({ owner: req.userId })
    .then((matchs) => res.send(matchs))
    .catch((err) => console.log(err.message));
});
//delete user Matchs
router.delete("/myMatch", AuthMiddleware, (req, res) => {
  Match.deleteOne({ owner: req.userId })
    .then(() => res.send({ msg: "Your match is delete" }))
    .catch((err) => console.log(err.message));
});

//add Participant
//edit participant
router.put("/:id", AuthMiddleware, (req, res) => {
  Match.findByIdAndUpdate(
    req.params.id,
    { $push: { participants: [req.body.participants] } },
    (err, data) => {
      if (err) {
        return res.send(500).send({ msg: "Server Errors" });
      } else {
        Match.findById(req.params.id)
          .then((match) => {
            console.log("req.body", req.body);
            res.status(200).send(match);
          })
          .catch((err) => {
            console.log(err);
            res.send(500).send({ msg: "Server Errors" });
          });
      }
    }
  );
});
//remove participant 2
router.put("/parti/:id", AuthMiddleware, (req, res) => {
  Match.findByIdAndUpdate(
    req.params.id,
    { $set: { ...req.body } },
    (err, data) => {
      if (err) {
        return res.send(500).send({ msg: "Server Errors" });
      } else {
        Match.findById(req.params.id)
          .then((match) => {
            console.log("req.body", req.body);
            res.status(200).send(match);
          })
          .catch((err) => {
            console.log(err);
            res.send(500).send({ msg: "Server Errors" });
          });
      }
    }
  );
});
module.exports = router;
