const express = require("express");
const app = express();
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
const Port = 8000;
app.listen(Port, (err) => {
  if (err) {
    throw err.message;
  } else {
    console.log(`Server is running on port ${Port}`);
  }
});
