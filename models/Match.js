const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
  name: { type: String, required: true },
  participants: { type: [], required: false },
  format: { type: String, required: true },
  date: { type: Schema.Types.Mixed, required: true },
  owner: { type: mongoose.Types.ObjectId, ref: "user" },
  create_date: { type: Date, default: Date.now },
});
module.exports = Match = mongoose.model("match", MatchSchema);
