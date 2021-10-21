const fb = require('express').Router();

// GET Route for retrieving all the notes
tips.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });