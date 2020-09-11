const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sensorSchema = new Schema(
  {
    node_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Node",
    },
    ip: {
      type: String
    },
    temperature: {
      type: Number,
    },
    humidity: {
      type: Number,
    },
    pm25: {
      type: Number,
    },
    co: {
      type: Number,
    },
    pressure: {
      type: Number,
    },
    nh3: {
      type: Number,
    },
    co2: {
      type: Number,
    },
    smoke: {
      type: Number,
    },
    sentByPiAt: {
      type: Date,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

const Sensor = mongoose.model("Sensor", sensorSchema);
module.exports = Sensor;
