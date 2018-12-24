var connection = require("./connection.js");
var mysql = require('mysql');

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(table, colOne, colTwo, valOne, valTwo, cb) {
    var queryString = "INSERT INTO ?? (??,??) VALUES (?,?)";
    var inserts = [table, colOne, colTwo, valOne, valTwo, cb];
    var string = mysql.format(queryString, inserts);
    connection.query(string, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, colOne, colTwo, valOne, valTwo, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

    connection.query( queryString,[table, colOne, colTwo, valOne, valTwo, cb],
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

module.exports = orm;