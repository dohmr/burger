const express = require("express");
// const exphbs = require("express-handlebars");
// const app = express();
const burgers = require("../models/burgers.js")
// express.Router to create modular, mountable route handlers.
// utilizing our 'burgers' models
const router = express.Router();

// GET route to retrieve data from DB
router.get("/", (req, res) => {
    burgers.all((data) => {
        // must pass an object
        const getObject = {
            burgers: data,
        };
        console.log(getObject);
        res.render("index", getObject);
    });
});
// add a new burger and POST it into our DB
router.post("/burger/eat", (req, res) => {
    console.log(req.body)
    burgers.create( req.body , (result) => {
        // Send back the ID of the new quote
        // console.log(result.insertId);
        res.json({ id: result.insertId });
    });
});

// update our burger, PUT its 'status' to devoured:true/false by :id
router.put("/burger/eat/:id/devoured", (req, res) => {
    const condition = { id: req.params.id };
    const update = { devoured: req.body.value };
  
    burgers.update(update, condition, (result) => {
      if (result.affectedRows === 0) {
        // If no rows were affected, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    });
  });


module.exports = router;
