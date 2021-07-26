const express = require('express')
const Route = express.Router()
const Course = require('../models/course')
const {verifyToken} = require('../valid/ValidAuth')
const {validCourse}=require('../valid/courseValid')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage
    // limits: {
    //   fileSize: 1024 * 1024 * 6
    // },
    // fileFilter: fileFilter
  });


Route.get('/getCourses',async (req,res)=>{
    //console.log("running")
    // if(!req.body.name)
    //     return res.send("name is required")
    
    const result= await Course.find({})
    if(result.length===0)
        return res.status(400).send("No Courses")
    //console.log(result)
    res.send(result)
})

// Route.get('/cateo',verifyToken,(req,res)=>{

// })

Route.post('/postCourses',upload.single('productImage'),verifyToken,async (req,res)=>{
   //console.log("runing")
   req.body.Features=JSON.parse(req.body.Features)
   //console.log(req.body)
    const {error} = await validCourse(req.body)
    //console.log("run")
    if(error)
        return res.send(error.message)
    const course= new Course({...req.body,productImage:req.file.path})
    //console.log(course)
    try{
        const result = await course.save()
        //console.log(result)
    }
    catch(error){
        res.send(error.message)
        return;
    }
    res.send(course._id)
})

Route.post('/deleteCourses',verifyToken,async (req,res)=>{
    if(!req.body.name)
        return res.send("name is required")

  const result = await Course.deleteOne({name:req.body.name})
    //console.log(result)
  if(result.deletedCount==0)
        return res.send("course does not exists.")
   res.send(true)
})

module.exports=Route