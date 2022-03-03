const { response } = require("express");
  var express = require("express");
  var app = express();

  app.use(express.static('public'));

  app.get("/", function(request, response){
    response.send("You have successfully created second app!");
  
});

  var server = app.listen(2001, 'localhost', function(){
    var host = server.address().address
    var port = server.address().port

    console.log('Server running at http://%s:%s', host, port);
    })

//Salalila Raskin Charles C.  
//WD-201