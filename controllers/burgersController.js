const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const burgers = require("../models/burger.js")