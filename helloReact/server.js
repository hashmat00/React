var express = require("express");

var app = express();

app.use(express.static('public'));



//change setting for timer"


app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server has started');
});