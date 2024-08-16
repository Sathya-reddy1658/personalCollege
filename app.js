const express = require("express");
const { subjectsData } = require("./models/subjectData");
const models = require("./models/models");
const app = express();
require("dotenv").config();
const port = 8080;
const { z } = require("zod");
const askgroq = require("./generate-roadmap.js");
const bodyParser = require("body-parser");
const infoGen = require("./views/VR_AND_AR/info-generator.js");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/dashBoard", (req, res) => {
  res.render("DashBoard");
});

app.get("/signUp", (req, res) => {
  res.render("signUp");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// app.post("/login", (req, res) => {
//   const { Data } = req.body;
//   if (Data) {
//     const signInschema = z.object({
//       name: z.string().min(1, "Name is required"),
//       email: z.string().email("Invalid email format"),
//       phnumber: z.string().length(10, "Phone number must be exactly 10 digits"),
//       password: z.string().min(6, "Password must be at least 6 characters"),
//     });
    
//     console.log("Received Data:", Data);

//     const parsedData = signInschema.safeParse(Data);
//     if (!parsedData.success) {
//       return res.status(400).json({ success: false});
//     } else {
//       return res.status(200).json({ success: true});
//     }
//   } else {
//     return res.status(400).json({ success: false});
//   }
// });


app.get("/classroom", (req, res) => {
  res.render("classroom");
});

app.get("/classroom/:class", (req, res) => {
  const className = req.params.class;

  if (className === "11th" || className === "12th") {
    res.render("Classes/classes");
  } else if (
    className === "1st" ||
    className === "2nd" ||
    className === "3rd"
  ) {
    res.send("We will see later");
  } else {
    res.status(404).send("Classroom not found");
  }
});

app.get("/classroom/subject/:subjectName", (req, res) => {
  const subjectName = req.params.subjectName.toLowerCase();
  const subject = subjectsData[subjectName];

  if (subject) {
    res.render("subjects/subject", { subject });
  } else {
    res.status(404).send("Subject not found");
  }
});

app.get("/classroom/subject/:subjectName/:concept", (req, res) => {
  const { subjectName, concept } = req.params;
  const subject = subjectsData[subjectName.toLowerCase()];
  if (subject) {
    const chapter = subject.chapters.find(
      (chap) => chap.key === concept.toLowerCase()
    );

    if (chapter) {
      const conceptData = {
        name: chapter.name,
        title: chapter.title || chapter.name,
        description:
          chapter.description || "Detailed information about this concept.",
        models: models.filter((model) => chapter.models.includes(model.name)),
      };
      console.log(conceptData); 
      res.render("Concepts/concept", { subject, concept: conceptData });
    } else {
      res.status(404).send("Concept not found");
    }
  } else {
    res.status(404).send("Subject not found");
  }
});

app.get("/show/:modelName",async  (req, res) => {
  const modelLink = req.query.link;
  const modelName = req.params.modelName;
  const info = await infoGen(modelName);
  console.log(modelName);
  console.log(info);
  res.render("VR_AND_AR/show", { link: modelLink, info: info });
});

//////////////////////////////////////////ROADMAP//////////////////////////////////////////

app.get("/roadmap", (req, res) => {
  res.render("map-prompt");
});

app.post("/roadmap", async (req, res) => {
  console.log(req.body);
  const resp = await askgroq(req.body.prompt);
  res.render("map", { resp: resp });
});

app.all("*", (req, res) => {
  res.status(404).send("404 NOT FOUND!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
