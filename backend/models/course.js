const { object } = require('joi')
const mongoose = require('mongoose')

const courseSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Instructor:{
        type:String,
        required:true,
    },
    IEmail:{
        type:String,
        required:true,
    },
    overview:{
        type:String,
        required:true
    },
    Features:{
        type:Object,
       // required:true
    },
    InstructorImage:{
        type:String,
       // required:true
    },
    reviews:{
        type:Object,
       // required:true
    },
    cateo:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    Topics:{
        type:Array,
        required:true
    },
    users:{
        type:Array
    },
    productImage:{
        type:String,
        require:true
    },
    Timings:{
        type:Array,
        require:true
    }

})

module.exports=mongoose.model('course',courseSchema)