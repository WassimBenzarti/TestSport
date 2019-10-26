const express = require("express");
require("dotenv").config();
console.log(process.env)

express()
    .get("/", (req,res)=>{
        res.json({
            ok:true,
            version:2,
            serverIsOnline:true
        })
    })
    .listen(process.env.PORT || 80)