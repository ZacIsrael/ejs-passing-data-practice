import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


// Set EJS as the templating engine
app.set('view engine', 'ejs');

// deafult GET request/ home page
app.get("/", (req, res) => {
  // retrieve & render the default file (index.ejs)
  res.render('index');

});

// triggered when the end user clicks submit
app.post("/submit", (req, res) => {
  const data = req.body;
  
  data.length = data.fName.length + data.lName.length;
  console.log('data = ', data);
  // fName & lName
  // send the body of the request to the ejs file as parameters
  res.render('index', data);

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
