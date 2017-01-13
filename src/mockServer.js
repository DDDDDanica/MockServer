/**
 * Created by zhao.shen on 13/01/2017.
 */
'use strict';
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let mockData = require('./mockData');

let urlencodedParser = bodyParser.urlencoded({extended: true, limit: '50mb'});
app.use(urlencodedParser);

//restful API here
app.get("/api/get/me/jsons", (req, res) => {
    if (req.query.groupBy == undefined) {
    res.status(200).send(mockData.overall);
    } else {
    res.status(200).send(mockData.groupByDep);
    }
});

app.options("/api/get/me/jsons", (req, res) => {
    res.status(200).send(mockData.options);
});


//404 is always in the end
app.use(function (req, res) {
    res.status(404).send("File Not Found");
});

app.listen(8080);