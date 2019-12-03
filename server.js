const express = require("express")
var app =express();
const router = require("./routes/product");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use("/product",router);
app.listen(9898,'0.0.0.0',()=>
{
    console.log("listening on port 9898");
})