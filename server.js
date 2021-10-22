const express = require('express');
const path = require('path');
const notes = require('./db/db.json');
const app = express();
var uniquid = require('uniquid')

const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/notes',(req,res) => 
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);
app.get('/api/notes',(req,res) => 
    res.json(notes)
);

app.post('/api/notes', (req, res)=>{
    req.body.id = uniquid();
    notes.push(req.body);
    res.send('some text')
});

app.listen(PORT, () =>
    console.log(`example app listen at http://localhost:${PORT}`)
);