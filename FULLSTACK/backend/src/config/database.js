require("dotenv").config();
const mongoose = require("mongoose");

function connectToDB() {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("Database is connected");

        })
}

module.exports = connectToDB