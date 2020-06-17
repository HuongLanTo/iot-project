const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actionSchema = new Schema({
  name: {
    type: String,
  },
  slug: {
    type: String,
  }
});

const Action = mongoose.model("Action", actionSchema);
module.exports = Action;
