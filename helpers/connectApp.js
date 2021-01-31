const mongoose = require("mongoose");
require("dotenv").config();
const mongoURL =
  process.env.URL ||
  "mongodb+srv://yosri:yosri123@soccer.w1nmw.mongodb.net/<dbname>?retryWrites=true&w=majority";
module.exports = ConnectApp = () => {
  mongoose.connect(
    mongoURL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        throw err.message;
      } else {
        console.log("You are  well connected ");
      }
    }
  );
};
