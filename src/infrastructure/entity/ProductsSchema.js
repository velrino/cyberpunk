const EntitySchema = require("typeorm").EntitySchema; 
const Products = require("../model/Product").Product;

module.exports = new EntitySchema({
    name: "Products",
    target: Products,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        },
        price: {
            type: "float"
        },
        img: {
            type: "text"
        }
    }
});