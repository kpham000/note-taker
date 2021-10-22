const express = require('express');
const path = require('path');
const noteRouter = require('./db/db.json');
const app = express();

const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());
app use(express.urlencoded({extended: true}));

app.get('/notes',(req,res) => 
res.sendFile(path.join(__dirname, 'public/notes.html'))
);
app.get('/notes',(req,res) => 
res.json(notes));

app.listen(PORT, () =>
    console.log(`example app listen at http://localhost:${PORT}`)
;)