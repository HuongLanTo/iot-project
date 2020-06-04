const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actionLogSchema = new Schema({
    action_user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    action_time: {
        type: Date,
        default: Date.now()
    },
    action_type: {
        type: String,
        enum: ["CREATE", "UPDATE", "APPROVE", "DELETE", "ADD", ]
    },
    collection: { //Tên bảng bị tác động
        type: String,
        required: true
    },
    request: {
        type: String,
    },
    response: {
        type: String,
    },
    previous_data: {
        type: String,
    },
    current_data: {
        type: String,
    },
    execution_time: {
        type: Number,
    }
}, {
    timestamps: {
        createdAt: "createdAt"
    }
})

const ActionLog = mongoose.model("ActionLog", actionLogSchema);
module.exports = ActionLog;