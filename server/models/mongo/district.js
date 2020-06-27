const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const districtSchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  slug: {
    type: String,
  },
  name_with_type: {
    type: String,
  },
  path: {
    type: String,
  },
  path_with_type: {
    type: String,
  },
  code: {
    type: String,
  },
  parent_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Province",
  },
});

const District = mongoose.model("District", districtSchema);
module.exports = District;
