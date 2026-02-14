const app = require("./src/app")
const connectToDB = require("./src/config/database")

connectToDB()

app.listen(3000,()=>{
    console.log("server is runnig on port at 3000")
})