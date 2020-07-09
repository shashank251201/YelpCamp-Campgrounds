var express = require("express");
var app = express();
var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine" , "ejs");

var campgrounds=[
    {name:"Salmon Creek" , image:"https://www.planetware.com/wpimages/2019/10/montana-glacier-national-park-best-campgrounds-avalanche-campground.jpg"},
    {name:"Granite Hill" , image:"https://www.planetware.com/wpimages/2019/10/montana-glacier-national-park-best-campgrounds-fish-creek-campground.jpg"},
    {name:"Mountain Goat's Rest" , image:"https://www.planetware.com/wpimages/2019/10/montana-glacier-national-park-best-campgrounds-rising-sun-campground.jpg"}
];

app.get("/" , function(req,res){
    res.render("landing");
});

app.get("/campgrounds" , function(req,res){
    res.render("campgrounds" , {campgrounds : campgrounds});
});

app.get("/campgrounds/new" , function(req,res){
    res.render("newcamp");
});

app.post("/campgrounds" , function(req,res){
    var newName = req.body.camp_name;
    var newImage =req.body.camp_image;
    campgrounds.push({name:newName , image:newImage});
    res.redirect("campgrounds");
});

app.listen(3000 , function(){
    console.log("The Campgrounds Server has Started");
});