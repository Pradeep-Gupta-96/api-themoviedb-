const express=require("express");
const nodemailer = require('nodemailer')
const router=new express.Router()


router.get('/',(req,res)=>{
    res.send("You! are online..")
})

// for mail method 
router.post('/sendemail', async(req,res)=>{
    const data=await req.body;
    const{id,title,overview,release_date,vote_average}=data.detail
    

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'randal45@ethereal.email',
                pass: 'U2hsarcmvan8zpMABA'
            }
        });
     const   mailOptions={
        from:'randal45@ethereal.email',
        to: 'pradeepbhai@gmail.com',
        subject:'Sending Movie details to on mail (Use NodeJS and Nodemailer)',
        html: `<p>${id}</p>
        <p>${title}</p>
        <p>${overview}</p>
        <p>${release_date}</p>
        <p>${vote_average}</p>`
     }

     transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("email send: " + info.response)
            res.status(201).json({status:201,info})
        }
    })

    } catch (error) {
        res.status(201).json({status:401,error})
    }
})

module.exports=router

