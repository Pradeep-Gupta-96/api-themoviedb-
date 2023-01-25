const express=require("express");
const router=require('./router')
const bodyparser = require('body-parser')
const cors =require('cors')
const app= express()

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors())
app.use(router)


app.listen("4000",()=>{
    console.log("server runnng on port 4000")
})