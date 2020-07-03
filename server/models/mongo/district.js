const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const districtSchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
    enum: ["quan", "huyen"]
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
  parent_code: {
    type: String,
  },
});

const District = mongoose.model("District", districtSchema);
module.exports = District;
