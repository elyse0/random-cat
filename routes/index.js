var express = require('express');
var router = express.Router();
var path = require("path")
var glob = require("glob")

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/* GET home page. */
router.get('/', function(req, res, next) {

  glob(path.resolve(__dirname + "/../" + "public/cats/*"), function (er, files) {

    var filename = path.parse(files[getRandomInt(files.length)]).base;

    res.redirect("cats/" + filename)
  })
});

module.exports = router;
