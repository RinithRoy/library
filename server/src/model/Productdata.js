const mongoose = require('mongoose'); //requiring mongoose//
mongoose.connect('mongodb://localhost:27017/ProductDb'); //teaching the address of db//
const Schema = mongoose.Schema; //storing schema in a constant//

var NewProductSchema = new Schema({ //this is the schema//
    productId : Number,
    productName : String,
    productCode : String,
    releaseDate : String,
    description :String,
    price : Number,
    starRating : Number,
    imageUrl : String
});

var Productdata = mongoose.model('product',NewProductSchema) //storing the model in a variable//
module.exports = Productdata; //exporting model//