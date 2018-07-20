const fs = require("fs");

module.exports = {
  entities: function (params) {
    var entities = [];
    fs.readdirSync(__dirname + '/entity').filter(function (file) {
      return file.match(/.*\.(js|ts)/ig);
    }).forEach(function (item, name) {
      entities.push(require("./entity/" + item.replace(/\.[^/.]+$/, "")));
    });
    return entities;
  }
};