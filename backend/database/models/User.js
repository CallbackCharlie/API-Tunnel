const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModel = new Schema({
    username: { type: String },
    email: { type: String, match: /^[^@]+@[^@]+\.[^@\.]{2,}$/ },
    password: { type: String },
    time_created: { type: Date },
    last_updated: { type: Date }
});

module.exports = mongoose.model('users', UserModel);