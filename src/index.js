const express = require("express");

express()
    .get("/", (req,res)=>{
        res.json({
            ok:true,
            version:1.1,
            serverIsOnline:true
        })
    })
    .listen(process.PORT || 8080)