const mongoose = require('mongoose');

const CategorySchema=mongoose.Schema({

    name:{type: 'string',minLength:5,default:'anonimus'},
    products:[{type: mongoose.Schema.Types.ObjectId,ref: 'Product',required:'true'}],  
    
})

module.exports = mongoose.model('categoryModel',CategorySchema)