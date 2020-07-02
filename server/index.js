const express = require('express');
const app = express();
const port = 4000;
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = 'toeat';
const url = 'mongodb://toeat:toeat@localhost:27017';
const client = new MongoClient(url, { useUnifiedTopology: true } );

let db, collection;

client.connect(function(err) {
  if (err !== null) {
    throw err;
  }

  db = client.db(dbName);
  collection = db.collection('recipes');

  console.log("Connected successfully to server");
});

app.use(express.json());

app.post('/recipes', (req, res) => {
  collection.insertOne(req.body, () => {
    res.json(req.body);
  });
});

app.get('/recipes', (req, res) => {
  collection.find({}).toArray((err, docs) => {
    res.send(docs);
  });
});

app.get('/recipes/:id', (req, res) => {
  collection.findOne({"_id": mongodb.ObjectId(req.params.id)}, (err, result) => {
    res.send(result);
  });
});

app.delete('/recipes/:id', (req, res) => {
  collection.deleteOne({ "_id": mongodb.ObjectId(req.params.id) }, (err) => {
    res.send(err ? 'failed' : 'success');
  });
});

app.put('/recipes/:id', (req, res) => {
  collection.updateOne({ "_id": mongodb.ObjectId(req.params.id) }, { $set: req.body }, () => {
    res.json(req.body);
  });
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
