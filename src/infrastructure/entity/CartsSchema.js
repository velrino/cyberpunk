const EntitySchema = require("typeorm").EntitySchema; 
const Carts = require("../model/Cart").Cart;

module.exports = new EntitySchema({
    name: "Carts",
    target: Carts,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        }
    },
    relations: {
        products: {
            target: "Product",
            type: "many-to-many",
            joinTable: true,
            cascade: true,
            columns : {
                count: {
                    type: "int",
                }
            }
        }
    }
});