const express = require("express");
const app = express();
const PORT = 5002;


app.use('/test', function(req, res){
    res.send("Route '/test' ");
});


app.use('/', function(req, res){
    res.send("Route '/' ");
});


app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
});