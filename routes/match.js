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
    body("name", "Name is empty! ").notEmpty().isLength({ min: 2, max: 20 }),
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
            Match.find({ date: req.body.date }).then((match) => {
              if (match.length) {
                return res.status(400).send({
                  errors: [
                    {
                      msg: "Ce date est reservé",
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
                    let newMatch = new Match({
                      ...req.body,
                      owner: req.userId,
                      statue: "En attente",
                    });
                    newMatch
                      .save()
                      .then((data) => res.status(200).send(data))
                      .catch((err) => console.log(err.message));
                  }
                });
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

//delet match by id
router.delete("/:id", AuthMiddleware, (req, res) => {
  Match.deleteOne({ _id: req.params.id })
    .then(() => res.send({ msg: "Your match is delete" }))
    .catch((err) => console.log(err.message));
});

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
            res.status(200).send(match);
          })
          .catch((err) => {
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
            res.status(200).send(match);
          })
          .catch((err) => {
            res.send(500).send({ msg: "Server Errors" });
          });
      }
    }
  );
});
//modif match
router.put("/admin/:id", AuthMiddleware, (req, res) => {
  console.log(req.body);
  Match.findByIdAndUpdate(
    req.params.id,
    { $set: { ...req.body } },
    (err, data) => {
      if (err) {
        return res.send(500).send({ msg: "Server Errors" });
      } else {
        Match.findById(req.params.id)
          .then((match) => {
            res.status(200).send(match);
          })
          .catch((err) => {
            res.send(500).send({ msg: "Server Errors" });
          });
      }
    }
  );
});
module.exports = router;
