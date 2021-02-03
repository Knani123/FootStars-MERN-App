const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  poste: { type: String, required: false },
  msg: { type: [], required: false },
  pied_fort: { type: String, required: false },
  age: { type: Number, required: false },
  poid: { type: Number, required: false },
  notif: { type: [], required: false },
  notification: { type: Number, required: false },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
  adress: { type: String, required: false },
  date: { type: Date, default: Date.now },
});

module.exports = User = mongoose.model("user", UserSchema);
