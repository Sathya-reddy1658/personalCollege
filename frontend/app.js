const express = require('express');
const app = express();
const port = 8080;
const models = require('../frontend/models.js');

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/classroom', (req, res) => {
  res.render('classroom');
});

app.get('/classroom/:class', (req, res) => {
  const className = req.params.class;

  if (className === "11th" || className === "12th") {
    res.render('Classes/elevenAndTwelve');
  } else if (className === "1st" || className === "2nd" || className === "3rd") {
    res.send("We will see later"); 
  } else {
    res.status(404).send("Classroom not found");
  }
});

app.get('/classroom/subject/:sub', (req, res) => {
  const subject = req.params.sub;

  if (subject === "botony") {
    res.render('subjects/botony');
  } else {
    res.status(404).send("Subject not found");
  }
});


app.get('/classroom/subject/botony/:concept', (req, res) => {
  const concept = req.params.concept;

  if (concept === "celltheory") {
    res.render('Concepts/celltheory');
  } else {
    res.status(404).send("Concept is Under Built ");
  }
});

app.get('/classroom/subject/botony/celltheory/:model', (req, res) => {
  const model = req.params.model;
  const modelData = models.find(m => m.name === model);
  console.log(modelData);
  if (modelData) {
    res.render('show/show', { modelData });
  } else {
    res.status(404).send("Model not found");
  }
});

app.all('*', (req, res) => {
  res.status(404).send("404 NOT FOUND!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
