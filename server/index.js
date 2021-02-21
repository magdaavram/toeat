const express = require('express');
const app = express();
const port = 4000;
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = 'toeat';
const url = 'mongodb://toeat:toeat@localhost:27017';
const client = new MongoClient(url, { useUnifiedTopology: true } );
const apiUrl = `http://localhost:${port}`;
const fs = require('fs');

const cors = require('cors');
app.use(cors());

let db, collection;

client.connect(function(err) {
  if (err !== null) {
    throw err;
  }

  db = client.db(dbName);
  collection = db.collection('recipes');

  console.log("Connected successfully to server");
});

app.use(express.json({limit: '5mb'}));


app.get('/recipes', (req, res) => {
  collection.find({}).toArray((err, docs) => {
    const recipes = docs.map(parseRecipe);

    res.send(recipes);
  });
});

app.get('/recipes/:id', (req, res) => {
  collection.findOne({"_id": mongodb.ObjectId(req.params.id)}, (err, result) => {
    const recipe = parseRecipe(result);

    res.send(recipe);
  });
});

app.post('/recipes', (req, res) => {
  const imageContent = req.body.imageData;

  delete req.body.imageData;

  collection.insertOne(req.body, () => {
    if(!imageContent) {
      res.json(parseRecipe(req.body));
      return;
    }

    const startIndex = imageContent.indexOf(',');
    const imageData = imageContent.slice(startIndex + 1);
    const buff = Buffer.from(imageData, 'base64');
    const currentTime = Math.floor(Date.now() / 1000);
    const imageTitle = `recipe-${currentTime}.png`;

    fs.writeFile(`public/images/${imageTitle}`, buff, (err) => {
      if (err) {
        console.log(err);
      } else {
        req.body.imageUrl = imageTitle;

        collection.updateOne({ "_id": mongodb.ObjectId(req.body._id) }, { $set: { imageUrl: imageTitle } }, () => {
          res.json(parseRecipe(req.body));
        });
      }
    });
  });
});

app.delete('/recipes/:id', (req, res) => {
  collection.deleteOne({ "_id": mongodb.ObjectId(req.params.id) }, (err) => {
    const response = {status: err ? 'failed' : 'success'};

    res.send(response);
  });
});

app.put('/recipes/:id', (req, res) => {
  delete req.body.imageUrl;

  collection.updateOne({ "_id": mongodb.ObjectId(req.params.id) }, { $set: req.body }, () => {
    res.json(req.body);
  });
});


app.use(express.static('public'));

const parseRecipe = recipe => {
  recipe.imageUrl = recipe.imageUrl && `${apiUrl}/images/${recipe.imageUrl}`;
  recipe.id = recipe._id;
  delete recipe._id;

  return recipe;
};

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
