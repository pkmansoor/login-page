const express = require('express')
const app = express()
const path = require("path")
const fs = require('fs')
const PORT = process.env.PORT||3500

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(express.static("views"))

const emailDB = "pkmansoor@gmail.com"
const passwordDB = "12345"

app.post("/login",(req,res)=>{
    const{email,password} = req.body

    if(email === emailDB && password === passwordDB){
        res.send("Login Succesfully")
    }else{
        res.send("Login Failed")
    }
})
app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})