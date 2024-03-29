//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');



const homeStartingContent = "Green Warrior Challenge is a monthly competition where Participants have to come up with practical solutions for some of the current real world environmental issues. Problem statement will be released during the beginning of every month and the participants will have over a week of time to pitch in their solutions.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-karthik:test123@cluster0.skqt2.mongodb.net/blogDB", {useNewUrlParser: true});

const postSchema = {
  title: String,
  question: String,
  winner: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);


app.get("/", function(req, res){
  res.render("first");
});


app.get("/challenge", function(req, res){

  Post.find({}, function(err, posts){
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts
      });
  });
});



// app.get("/compose", function(req, res){
//   res.render("compose");
// });


// app.post("/compose", function(req, res){
//   const post = new Post({
//     title: req.body.postTitle,
//     question:req.body.questionTitle,
//     winner:req.body.winnerTitle,
//     content: req.body.postBody
//   });
//
//
//   post.save(function(err){
//     if (!err){
//         res.redirect("/challenge");
//     }
//   });
// });



app.post("/home", function(req, res){
  res.redirect("/");
});


app.post("/first", function(req, res){
  res.redirect("/challenge");
});


app.get("/posts/:postName", function(req, res){

const requestedPostId = req.params.postName;

  Post.findOne({_id: requestedPostId}, function(err, post){
    if(err){
      console.log(err);
    }
    res.render("post", {
      title: post.title,
      question:post.question,
      winner: post.winner,
      content: post.content
    });
  });

});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.listen(port, function() {
  console.log("Server started on port 3000");
});
