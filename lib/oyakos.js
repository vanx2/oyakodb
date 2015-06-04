var fs = require('fs');
var path = require('path');

module.exports = {
//  json: JSON.parse(fs.readFile('./db.json', function(err,data){"return [{}]"}),
  add: function (card, cb){
    this.json.push(card);
    this.flush();
    var result="ok";
    cb(result);
  },
  remove: function (id, cb){
    delete this.json[id];
    this.flush();
    var result="ok";
    cb(result);
  },
  update: function (card, cb){
    this.flush();
    this.json[card.id] = card;
    var result="ok";
    cb(result);
  },
  flush: function (){
    fs.writeFile('./db.json', JSON.stringify(this.json));
  }
};
fs.readFile('./db.json', function(err,data){module.exports.json = data ? data : [];});
