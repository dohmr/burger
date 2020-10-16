const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db",
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// app.listen(PORT, () => {
//     // Log (server-side) when our server has started
//     console.log(`Server listening on: http://localhost:${PORT}`);
// });

module.exports = connection;