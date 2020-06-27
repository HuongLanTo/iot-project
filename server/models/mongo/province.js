const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const provinceSchema = new Schema({
  name: {
    type: String,
  },
  slug: {
    type: String,
  },
  type: {
    type: String,
    enum: ["thanh-pho", "tinh"]
  },
  name_with_type: {
    type: String,
  },
  code: {
    type: String,
  },
});

const Province = mongoose.model("Province", provinceSchema);
module.exports = Province;
