const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());                                                                                             // parse requests of content-type: application/json

app.use(bodyParser.urlencoded({ extended: true }));                                                                     
                                                                                  
const routes = require("./routes/router.js");
app.use('/',routes) 

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});