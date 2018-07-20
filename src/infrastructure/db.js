const getManager = require("typeorm").getManager;

module.exports = {
  create: function (Model, object) {
    return getManager().getRepository(Model).save(object);
  },
  list: function (Model) {
    return getManager().getRepository(Model).find();
  },
  first: function (Model,id) {
    return getManager().getRepository(Model).findOne(id);
  },
};