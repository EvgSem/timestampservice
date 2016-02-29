var timestampService = require("../src/timestampservice");
var express = require('express');
var app = express();

   app.get('/:dateString', function (req, res) {
        var dateString = req.params.dateString;
        console.log("Param: " + dateString);
        var response = timestampService.format(dateString);
        console.log('Response: ' + response);
        res.send(response);
    })

module.exports.app = app;