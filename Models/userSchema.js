const mongoose=require('mongoose');

const gender='male'|'female';
const userSchema=mongoose.Schema({
password:{type:String,require:'true',minLength:8},
firstName:{type:String,require:'true'},
lastName:{type:String},
//רשימה של רשימות הנסיעות
ListsTravel:[{type:mongoose.Schema.Types.ObjectId,ref: 'listTravelModel'}],
age:{type:Number,require:'true',min:5,max:99},
gender:{type:gender,require:'true',},
email:{type:String,match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]}   

})

module.exports=mongoose.model('userModel',userSchema)