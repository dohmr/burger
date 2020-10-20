const connection = require("./connection.js");

const orm = {
    // GET and display all burgers in database
    selectAll: (table, cb) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, burgers) => {
            if (err) {
                throw err;
            }
            cb(burgers);
        });
    },
    // take from form and PUT into database
    insertOne: (table, newBurger, cb) => {
        const queryString = "INSERT INTO ?? SET ?";
        const values = [table, newBurger];
        connection.query(queryString, values, (err, burgers) => {
            if (err) {
                throw err;
            }
            cb(burgers);
            // do we need a reload of the page?
        });
    },
    // UPDATE value of a burger to devoured true/false by :id
    updateBurger: (table, update, condition, cb) => {
        const queryString = "UPDATE ?? SET ? WHERE ?";
        const values = [table, update, condition];
        connection.query(queryString, values, (err, burgers) => {
            if (err) {
                throw err;
            }
            cb(burgers); 
        });
    },

};
    

    



module.exports = orm;