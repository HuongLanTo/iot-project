const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = new Schema({
  name: {
    type: String,
  },
  area_permission: [{ type: mongoose.Schema.ObjectId, ref: "District" }],
  action_permission: [{ type: Number, require: true }],
});

const Role = mongoose.model("Role", roleSchema);
module.exports = Role;
