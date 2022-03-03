var express = require("Express");

var app = express();

app.get("/", function(request, response){
  response.send("Hello World!");
});

app.listen(3000, function(){
  console.log("Server is running at http://localhost:3000");
});

//Salalila Raskin Charles C.  
//WD-201