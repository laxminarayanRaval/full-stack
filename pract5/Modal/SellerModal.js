const mongose = require('mongoose');
const SellerSchema = mongose.Schema({
    SellerId:String,
    Name:String,
    ProductId:[{type:String}],
});
const SellerModal = mongose.model("Seller",SellerSchema,"Seller")
module.exports = SellerModal;
