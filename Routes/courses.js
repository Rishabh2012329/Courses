const express = require('express')
const Route = express.Router()
const Course = require('../models/course')
const {verifyToken} = require('../valid/ValidAuth')

Route.get('/getCourses',verifyToken,(req,res)=>{
    
})

Route.get('/cateo',verifyToken,(req,res)=>{

})

Route.post('/postCourses',verifyToken,(req,res)=>{
    
})

Route.post('/deleteCourses',verifyToken,(req,res)=>{

})

module.exports=Route