const express = require("express")

const app = express()  // server call 

app.use(express.json())   //* req data ko express me lane ke liye (.use) likhan parega 

const notes = []

//? resource create ho rha h (.post)
app.post("/notes",(req,res)=>{

    console.log(req.body);   //? req kr rha h body ka data ko
    
    notes.push(req.body)   // data push kr rhe h

    res.send("Notes create")
})

// user resource dekh sake
app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.listen(3000)  //! server runnig