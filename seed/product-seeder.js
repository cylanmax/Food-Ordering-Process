var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping',{ useNewUrlParser: true });

var products = [
    new Product({
        imagePath: 'https://s3.amazonaws.com/pixtruder/original_images/9fbb73a7cba9b7b75c3d05484f6b6d087470641d',
        title: 'Hamburger',
        description: 'Original Delicious Hamburger',
        price: 10
    }),
    new Product({
        imagePath: 'https://purepng.com/public/uploads/large/purepng.com-french-friesfood-potato-tasty-chips-snack-eating-restaurant-french-fries-fast-941524624113uqv8j.png',
        title: 'French Fries',
        description: 'Delicious French Fries',
        price: 5
    }),
    new Product({
        imagePath: 'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_999-combohs_all-american-burger-fries.jpg',
        title: 'Meal Set',
        description: 'Meal set included Hamburger and French Fries',
        price: 12
    })
];

var done = 0;
for (var i = 0; i< products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}