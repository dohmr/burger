const express = require("express");
// const exphbs = require("express-handlebars");
const app = express();

const burgers = require("../models/burgers.js")

// express.Router to create modular, mountable route handlers.
const router = express.Router();

// GET route to retrieve data from DB

// add a new burger and POST it into our DB

// update our burger, PUT its 'status' to devoured by :id