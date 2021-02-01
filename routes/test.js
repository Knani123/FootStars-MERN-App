if (1==2){console.log("wawz");}else {
            Match.find({ date:req.body.name }).then((match) => {
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
                let newMatch = new Match({ ...req.body, owner: req.userId });
                newMatch
                  .save()
                  .then((data) => res.status(200).send(data))
                  .catch((err) => console.log(err.message));
              }
            });
          }
              }
            });
          }