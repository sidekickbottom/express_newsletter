const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const app=express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, resp){
  resp.sendFile(__dirname+"/signup.html");
})

app.post('/', function(req, resp){
var firstName=req.body.firstName;
var lastName=req.body.lastName;
var email=req.body.email;

console.log(firstName,lastName,email);



app.listen(process.env.PORT || 3000, function(){
  console.log("server started on port 3000");
});
//d96d56fd492c15c28e2d81f3865dd8db-us18
// 484232abdb
