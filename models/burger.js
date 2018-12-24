var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },


  insertOne: function(burgerName, cb) {
    orm.insertOne("burgers", "burger_name", "devoured", burgerName, false, function(res) {
      cb(res);
    });
  },

  updateOne: function(burgerID, devouredStat, cb) {
    orm.updateOne("burgers", "devoured", devouredStat, "id", burgerID, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
