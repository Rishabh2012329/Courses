const express= require('express')
const Auth=require('./Routes/Auth')
const app=express();
const bodyParser=require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser');

dotenv.config()

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://Rishabh:rishabh231@cluster0.dcbjl.mongodb.net/Cluster0?retryWrites=true&w=majority',()=>{
    console.log("connected")
})

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
app.use('/auth',Auth)


app.listen(3000,()=>{
    console.log("Listening")
})