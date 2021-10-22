// const express = require("express");
// const router = express.Router();
// const fs = require("fs");

// const notes = require("../db/db.json")

// GET Route for retrieving all the notes
// tips.get('/', (req, res) => {
//     readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
//   });

// router.get("/",(req,res)=>{
//    res.json(db)
// })

// router.get("/:id",(req,res)=>{
//     for (let i = 0; i < notes.length; i++) {
//         if(notes[i].id==req.params.id){
//            return res.json(notes[i])
//         }   
//     }
//     res.status(404).send("no note found")
// })

// router.post("/",(req,res)=>{
//     console.log(req.body);
//     notes.push(req.body)
//     fs.writeFileSync("./db/db.json",JSON.stringify(notes,null,4))
//     console.log("done")
//     res.json({message:"note recieved"})
     
// })

// module.exports = router;