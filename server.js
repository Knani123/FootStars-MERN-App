const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use("/uploads", express.static(__dirname + "/uploads"));
//connect to database
const ConnectApp = require("./helpers/connectApp");
ConnectApp();

//body parser Middleware
app.use(express.json());

//register
app.use("/register", require("./routes/register"));
//login
app.use("/login", require("./routes/login"));
//create match
app.use("/match", require("./routes/match"));
//image
app.use("/img", require("./routes/upload"));
//heroku route
app.get("/", (req, res) => {
  console.log("Hello to footstras123");
});
const Port = process.env.PORT || 8000;

app.listen(Port, (err) => {
  if (err) {
    throw err.message;
  } else {
    console.log(`Server is running on port ${Port}`);
  }
});
