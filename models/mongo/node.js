const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nodeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    created_by: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    status: {
        type: Number,
        default: 1 //0: tạm dừng hoạt động, 1: Hoạt động, -1: dừng hoạt động vĩnh viễn
    },
    approve: {
        type: Number,
        default: 0 //0: Chưa phê duyệt, 1: Phế duyệt, -1: Từ chối
    },
    reason: {
        type: String
    },
    temperature_status: {
        type: Number,
        default: 1,
        enum: [0,1]
    },
    humidity_status: {
        type: Number,
        default: 1
    },
    dust_status: {
        type: Number,
        default: 1
    },
    co_status: {
        type: Number,
        default: 1
    },
    pressure_status: {
        type: Number,
        default: 1
    },
    nh3_status: {
        type: Number,
        default: 1
    },
    co2_status: {
        type: Number,
        default: 1
    },
    smoke_status: {
        type: Number,
        default: 1
    },
    location: {
        type: mongoose.Schema.ObjectId,
        ref: "Location"
    },
    ip: {
        type: String,
        required: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const Node = mongoose.model("Node", nodeSchema);
module.exports = Node;