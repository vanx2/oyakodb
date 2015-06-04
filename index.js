#!/bin/env node

var express = require('express');
var oyakos = require('./lib/oyakos.js');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var app = express();

app.use(express.static('pub'));
app.listen(3000);

app.get("/api/cards", function(req, res){
  res.send(oyakos.json);
});

app.post("/api/cards", multipartMiddleware, function(req, res){
  oyakos.add(req.body, function(result){
    res.send(result);
  });
});

/*
app.get("/api/cards/:_id", function(req, res){
  oyakos.update(_id, req, function(result){
    res.send(result);
  });
});

app.post("/api/cards/:_id", function(req, res){
  oyakos.update(_id, req, function(result){
    res.send(result);
  });
});

app.delete("/api/cards/:_id", function(req, res){
  oyakos.delete(_id, req, function(result){
    res.send(result);
  });
});

*/

