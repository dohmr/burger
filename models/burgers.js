const orm = require("../config/orm.js");

const burgers = {

    all: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    create: (newBurger, cb) => {
        orm.insertOne("burgers", newBurger, (res) => {
            cb(res);
        });
    },

    update: (eatBurger, criteria, cb) => {
        orm.updateBurger("burgers", eatBurger, criteria, (res) => {
            cb(res);
        });
    };

};


// selectAll()
// insertOne()
// updateOne()


module.exports = burgers;