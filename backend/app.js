const express= require('express')
const Auth=require('./Routes/Auth')
const app=express();
const bodyParser=require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser');
const cours = require('./Routes/courses')
const cors = require('cors')
const EmailVerify=require('./Routes/EmailVerification')
const jwt = require('express-jwt')
const pay = require('./Routes/Pay')
const prod='http://localhost:3000'
const durl="https://rishabh2012329.github.io"
app.use(cors({
    credentials:true,
    origin:prod
}))
dotenv.config()

app.use(express.json())
app.use('/uploads',express.static('uploads'))
app.use(cookieParser())
app.use(express.urlencoded())

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGODB,()=>{
    console.log("connected")
})



app.use('/auth',Auth)
app.use('/course',cours)
app.use('/verification',EmailVerify)
app.use('/payment',pay)


app.listen(process.env.PORT||5000,()=>{
    console.log("Listening")
})