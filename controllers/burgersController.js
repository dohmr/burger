const express = require("express");
// const exphbs = require("express-handlebars");
// const app = express();

const burgers = require("../models/burgers.js")

// express.Router to create modular, mountable route handlers.
// utilizing our 'burgers' models
const router = express.Router();

// GET route to retrieve data from DB
router.get("/", (req, res) => {
    burgers.all((data) =>{
        // must pass an object
        const getObject = {
            burgers: data,
        };
        console.log(getObject);
        res.render("index", getObject);
    });
});
// add a new burger and POST it into our DB

// update our burger, PUT its 'status' to devoured by :id

// module.exports = routes;

module.exports = router;
// took FOREVER TO FIND THIS TYPO DEBUG!!!!