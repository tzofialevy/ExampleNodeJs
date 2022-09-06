const mongoose=require('mongoose');


const ProductSchema=mongoose.Schema({

    name:{type: 'string',minLength:5,default:'anonimus'}, 
    //עונה
    season:{},
    categories:[{type: mongoose.Schema.Types.ObjectId,ref: 'categoryModel',required:'true'}],

})

module.exports = mongoose.model('ProductModel',ProductSchema)


