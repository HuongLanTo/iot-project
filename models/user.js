const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String,unique: true,required: true,max: 6,min: 5},
    password: {type: String,require: true,max: 1024,min: 5},
    role: {
        type: mongoose.Schema.ObjectId,
        ref: "Role"
    },
    name: {type: String,required: true,min: 5,max: 255},
    phone: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                const regex = /^0(1\d{9}|9\d{8})$/;
                return regex.test(value);
            },
            message: '{VALUE} is not a valid email address!'
        }
    },
    email: {
        type: String,
        max: 255,
        min: 6,
        unique: true,
        validate: {
            validator: function (value) {
                const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return regex.test(value);
            },
            message: "{VALUE} is not a valid email address!"
        }
    },
    status: {type: Number, default: 1},
    approve: {
        type: Number,
    },
    avatar: {type: Buffer},
    contentType: {type: String},
    gender: {
        type: String,
        enum: ['NAM', 'NU', 'NULL'],
        default: 'NULL'
    },
    birthday: { type: String, required: true },
    created_by: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;