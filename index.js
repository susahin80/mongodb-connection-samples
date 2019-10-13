const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const app = express();
require("dotenv").config();
const mongodb = require('./mongodb');

require("./startup/routes")(app);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the db")
    app.listen(3000);
  }
});
