const express = require("express");
const mongoose = require("mongoose");
//const MongoClient = require('mongodb').MongoClient;
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;
//const uri = "mongodb+srv://kaka:RENRsEp1RHGtaJ5j@inter.jrtig.mongodb.net/inter?retryWrites=true&w=majority";

// Connect to MongoDB
//const client = new MongoClient(uri, { useNewUrlParser: true });
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
