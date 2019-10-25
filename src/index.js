const express = require("express");

express()
    .get("/", (req,res)=>{
        res.json({
            ok:true,
            serverIsOnline:true
        })
    })
    .listen(process.PORT || 8080)