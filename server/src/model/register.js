const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductDb')
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username:String,
    phonenumber:Number,
    email:String,
    password:String
});
var UserData = mongoose.model('userdata',userSchema);
module.exports = UserData;