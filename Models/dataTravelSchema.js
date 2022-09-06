const mongoose=require('mongoose');

const DataTravelSchema=mongoose.Schema({
    //בדיקות תקנינות לתאריך
    date:{type:String,require:'true'},
    // שליפת רשימת ערים
    place:{},
    dateback:{type:String,require:'true'},
    // finish:{},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:'userModel'},
    list_travel:[{type:mongoose.Schema.Types.ObjectId,ref:'productModel'}]   

    
})
module.exports=mongoose.model('dataTravelModel',DataTravelSchema)