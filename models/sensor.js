const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sensorSchema = new Schema({
    node_ip: {
        type: mongoose.Schema.ObjectId,
        ref: "Node"
    },
    humidity: {
        type: Number
    },
    temperature: {
        type: Number,
    },
    sentByPiAt: {
        type: Date
    },
    recieved_at: {
        type: Date,
        default: Date.now()
    },
})

const sensorSchema = mongoose.model("Humidity", sensorSchema);
module.exports = Humidity;