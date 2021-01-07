const express = require('express'); //requiring express//
const ProductData = require('./src/model/Productdata'); //requiring model//
const UserData = require('./src/model/register');
const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/ProductDb';
mongoose.connect(db,function(err){
    if(err){
        console.log(+err);
    }else{
        console.log('Connected to MongoDb');
    }
});
const cors = require('cors'); //requiring cors//
var bodyparser = require('body-parser'); //requiring body-parser//
var app = new express();//creating instance//
app.use(cors()); //use cors//
app.use(bodyparser.json());
// app.use(express.urlencoded({extended:true}));
app.get('/products',function(req,res){ //showing list of products route//
    res.header("Access-Control-Allow-Origin","*") //to access /products from any origin//
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE,OPTIONS');//to access /products using any methods//
    ProductData.find() //to find products from database//
        .then(function(products){ //store the data in products//
            res.send(products); //send those data//
        });
});
app.post('/insert',function(req,res){ //inserting a new product route//
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE,OPTIONS');
    // console.log(req.body);
    var product = {
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl
    }
    var product = new ProductData(product);
    product.save();
});
app.post('/edit',(req,res)=>{ //deleting a product route//
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE,OPTIONS');
    const id = req.body.id;
    ProductData.deleteOne({_id:id})
    .then((products)=>{
        res.send(products);
    });
});
app.post('/product',(req,res)=>{  //finding a single product route//
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE,OPTIONS');
    const id = req.body.id;
    ProductData.findOne({_id:id})
    .then((product)=>{
        res.send(JSON.parse(JSON.stringify(product)));
    });
});
app.post('/update',(req,res)=>{ //update a product route//
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE,OPTIONS');
    let product = 
    {
    _id:req.body.product['_id'],
    productId:req.body.product['productId'],
    productName:req.body.product['productName'],
    productCode:req.body.product['productCode'],
    releaseDate:req.body.product['releaseDate'],
    description:req.body.product['description'],
    price:req.body.product['price'],
    starRating:req.body.product['starRating'],
    imageUrl:req.body.product['imageUrl']
    }
    ProductData.updateOne({_id:product._id},
        {$set:
            {
                productId :product.productId,
                productName :product.productName,
                productCode :product.productCode,
                releaseDate :product.releaseDate,
                description :product.description,
                price :product.price,
                starRating :product.starRating,
                imageUrl :product.imageUrl
            }})
            .then((products)=>{
                res.send("Successfully Updated");
});
});
app.post('/signup',function(req,res){ //signup route//
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE,OPTIONS');
    // console.log(req.body);
    var person = 
    {
        username : req.body.person.username,
        phonenumber : req.body.person.phonenumber,
        email : req.body.person.email,
        password : req.body.person.password
    }
    var userdata = new UserData(person);
    userdata.save();
});
app.post('/login',(req,res)=>{ //login route//
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE,OPTIONS');
    var person ={email:req.body.person.email,password:req.body.person.password};
    console.log(person);
    UserData.findOne({email:person.email,password:person.password},(err,userdata)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            if(!userdata)
            {
                res.status(401).send('Invalid Credentials')
        
            }
        else
        {
            res.status(200).send(userdata);
                
        }
        }
    })
});
app.listen(3000,function(){ //listening port//
    console.log('Listening to Port 3000');
});