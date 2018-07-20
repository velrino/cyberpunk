const Cart = require("../model/Cart").Cart;
const DB = require("../db");

module.exports = {
  create: function (request,response) {
    return DB.create(Cart,request.body)
    .then((created) => {
      response.send( created );
      }).catch(function (error) {
        return error;
    });
  },
  list: function (request,response) {
    return DB.list(Cart).then((created) => { 
        response.send( created );
     })
  },
  show: function (request,response) {
    return DB.first(Cart,request.params.id).then((result) => { 
        response.send(result);
     })
  },
  delete: function (request,response) {
    return {}
  }, 
  addProduct: function (request,response) {
    return {}
  }, 
  updateProduct: function (request,response) {
    return {}
  }, 
  removeProduct: function (request,response) {
    return {}
  },  
};