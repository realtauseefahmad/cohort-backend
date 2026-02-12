require("dotenv").config();

const app = require("./src/app");

const mongoose = require("mongoose");


// ye Function Database connect krega 
function connectionToDb() {

    //! this method is connect to server with MongoDB Database
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("connected to Database");
        })

    //? ye url jo h wo  mongoDb compass connect kr rha h clusters se
};

connectionToDb();

app.listen(3000, () => {
    console.log("server is running on port 3000");

})