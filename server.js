const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgersController.js");

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${ PORT}`);
});