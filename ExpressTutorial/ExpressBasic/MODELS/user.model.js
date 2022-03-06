const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 3,
        max: 55,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    mobile: {
        type: String,
        trim: true,
        min: 10,
    },
    password: {
        type: String,
        trim: true,
        min: 6,
        max: 25,
        required: true

    },
    createdAt: {
        type: Date, default: Date.now()
    },
    isActive: { type: Boolean, default: true }
}, { timestamp: true })

const User = mongoose.model("User", UserSchema)
module.exports = User