require('dotenv').config({path: "./.env"});
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors = require('cors');  

const app=express();
app.use(cors());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const DB = process.env.DATABASE;
mongoose.connect(DB,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}).then(()=>{
  console.log("connection successful");
}).catch((err)=>console.log(err));
const date=require(__dirname+"/date.js")
const reviewschema = new mongoose.Schema({

  name:String,
  photo:String,
  points:Number,
  description: String
});
const Review = mongoose.model("Review", reviewschema);
let review=[];
let blog=[];
let beginner=[];
let advanced=[];
let intermediate=[];
let post;
app.get("/",function(req,res)
{

  Review.find({}, function (err, review) {
        res.render("index",{newrev:review,newblog:blog});
       });

});

app.get("/review",function(req,res){
  res.render("review");
});

app.post("/review",function(req,res){
let objrev={

}
const review = new Review({
  name: req.body.name,
  photo:req.body.photo,
  points:parseInt(req.body.point),
  description:req.body.descrip
   });
  review.save(function(err){
    if (!err){

        res.redirect("/");
    }
  });

});
app.get("/beginner",function(req,res){
  res.render("beginner",{newbeg:beginner,newpost:post});
});
app.get("/intermediate",function(req,res){
  res.render("intermediate",{newbeg:intermediate,newpost:post});
});
app.get("/advanced",function(req,res){
  res.render("advanced",{newbeg:advanced,newpost:post});
});

app.get("/blog",function(req,res){
  res.render("blog");
});
app.post("/blog",function(req,res){
  let day=date();
let objblog={
  photo:req.body.photo,
  name:req.body.name,
  email:req.body.email,
  date:day,
  title:req.body.title,
  story:req.body.story
}
blog.push(objblog);
res.redirect("/");
});
app.get("/add",function(req,res){
  res.render("add");
});
app.post("/add",function(req,res){
  let objadd={
    photo:req.body.photo,
    name:req.body.name,
    email:req.body.email,
    phone: req.body.phone,
    level:req.body.level,
    bio:req.body.bio
  }
  if(req.body.level==="beginner")
  {
    beginner.push(objadd);
  }
  else if(req.body.level==="advanced")
  {
    advanced.push(objadd);
  }
  else
  {
    intermediate.push(objadd);
  }




  res.redirect("/");
});
app.get("/post",function(req,res){
  res.render("post");
});

app.post("/post",function(req,res){
post={
  name:req.body.name,
  age: req.body.age,
  weight:req.body.weight,
  height: req.body.height,
  phone:req.body.phone,
  level:req.body.level
}
let lev=req.body.level;
if(lev==="beginner")
{

res.redirect("/beginner");
}
else if(lev==="intermediate")
{
  res.redirect("/intermediate");
}
else
{
  res.redirect("/advanced");
}

});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
