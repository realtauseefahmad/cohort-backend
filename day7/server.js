const connectToDB = require("./src/config/database")
const app = require("./src/app")

connectToDB();

app.listen(3000, () => {
    console.log("server is runnig on port 3000");

})