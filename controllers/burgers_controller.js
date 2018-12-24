var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
       burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.newBurger, function (result) {
      res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res) {
  var id = req.params.id;
  let changedStat;

  if (req.body.devour === 'true') {
    changedStat = true
  }

  if (req.body.devour === 'false') {
    changedStat = false
  }

  burger.updateOne( id, changedStat, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
     
});

module.exports = router;
