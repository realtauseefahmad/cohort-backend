const express = require("express")

const app = express() //* server create ho gya h

app.use(express.json())

const notes = []

// app.get("/",(req,res)=>{
//     res.send("hello")
// })

app.post("/notes",(req,res)=>{
    console.log(req.body);
    notes.push(req.body)
    res.send("note create")
    
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

/**
  delete note  (params)
 */

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index ]
    res.send("notes delete successfully")
    
})

//** data patch means updata practial */

app.patch("/notes/:index",(req,res) => {
    notes[ req.params.index ].description = req.body.description 
    res.send("Notes updated")
})


module.exports = app