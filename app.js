const express = require("express");
const path = require("path");
const app = express();
const port = 602;

app.use(express.static(__dirname+'/public/'))

app.listen(port, ()=>{
    console.log(`listening port ${port}`)
})

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "src/login.html"));
})

app.get("/album", (req, res)=>{
    res.sendFile(path.join(__dirname, "src/album.html"))
})
