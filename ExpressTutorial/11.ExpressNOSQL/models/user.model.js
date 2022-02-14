const mongoose = require("mongoose");

let UserSchema = mongoose.Schema(
    {
        id: { type: String },
        name: { type: String },
        email: { type: String },
        password: { type: String },
        mobile: { type: String },
        isAdmin: { type: Boolean },
        isActive: { type: Boolean },
        join_time: { type: Date, default: Date.now }
    },
    { timestamp: true }
);

module.exports = mongoose.model("users", UserSchema);