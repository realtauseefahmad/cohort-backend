const express = require("express")

const app = express()

app.get('/', (req,res) => {
    res.send("hello tauseef ")
})

app.get('/home', (req,res)=>{
    res.send("This is a Home page")
})
app.listen(3000)