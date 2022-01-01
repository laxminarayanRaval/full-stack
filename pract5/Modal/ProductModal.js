const mongose = require('mongoose');
const ProductSchema = mongose.Schema({
    ProductId:String,
    Title:String,
    Price:String,
    Category:[{type:String}],
    CompanyId:String,
    SellerId:[{type:String}],
});
const ProductModal = mongose.model("Product",ProductSchema,"Product")
module.exports = ProductModal;
