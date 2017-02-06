var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();



app.get('/books', function(request, response) {
    fs.readFile(process.argv[3], function(err, data) {
        if(err) {
            response.end(err);
        }
        
        var object = JSON.parse(data);
        response.json(object);
    });
    
});



app.listen(process.argv[2]);