const { Router } = require('express')
const express = require('express')
const Route = express.Router()
const bcrypt=require('bcrypt')
const {ValidSign,loginValid} =require('../valid/ValidAuth')
const User = require('../models/User')
const jwt = require('jsonwebtoken')


Route.post('/login',async (req,res)=>{
    const {error}=loginValid(req.body)
    if(error)
        return res.status(400).send(error.details[0].message) 
  
    const user= await User.findOne({email:req.body.email})
    if(!user)return res.status(400).send("Email or password is wrong")

    const validpass = await bcrypt.compare(req.body.password,user.password)
    if(!validpass) return res.status(400).send('Email or password is wrong')
   
    const token =jwt.sign({_id:user._id},process.env.TOKEN_SECRET,{expiresIn:"1m"})
    //const rtoken =jwt.sign({_id:user._id},process.env.REFRESH_TOKEN_SECRET,{expiresIn:"1y"})
    
     res.cookie('token',token,{
         expiresIn:2629800000,
         httpOnly:true
     })
     res.header('auth-token',token).send({token:token,name:user.name,college:user.college})
})

Route.post('/signup',async (req,res)=>{
    try{
       // console.log("run")
        const {error}= await ValidSign(req.body)
        if(error){
            res.send(error.message)
            return;
        }
        const emailCheck= await User.findOne({email:req.body.email})
        if(emailCheck)return res.status(400).send("email already exists") 

        const salt =await bcrypt.genSalt(10)
        const hashpassword= await bcrypt.hash(req.body.password,salt)
    
        const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:hashpassword,
            college:req.body.college
        })
        
        try{   
            const saved=await user.save()
            res.send({saved:user._id})
        }
        catch(err){
            res.status(400).send(err)
        }
    }
    catch(err){
        console.log(err)
    }
})
module.exports=Route