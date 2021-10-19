//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");



const homeStartingContent = "To accomplish the purpose of Clean and Green UVCE, a student led initiative, Go Green and CLean Club which is simply known as G2C2 was started in the year 2014 by a group of ME CSE deapartment students. It is now run by enthusiasts from 2nd and 3rd year Btech students. Presently it has about 26 voluntary members who are dedicated towards the cause.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];

app.get("/", function(req, res){
  res.render("first");
});

app.get("/challenge", function(req, res){
  res.render("home", {
    startingContent: homeStartingContent,
    posts: posts
    });
});


app.get("/signin", function(req, res){
  res.render("signin");
});


app.post("/signin", function(req, res){


});


app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  const post = {
    title: req.body.postTitle,
    question:req.body.questionTitle,
    winner:req.body.winnerTitle,
    content: req.body.postBody
  };

  posts.push(post);

  res.redirect("/challenge");

});


app.post("/home", function(req, res){
  res.redirect("/");
});


app.post("/first", function(req, res){
  res.redirect("/challenge");
});


app.get("/posts/:postName", function(req, res){
  const requestedTitle = _.lowerCase(req.params.postName);

  posts.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === requestedTitle) {
      res.render("post", {
        title: post.title,
        question:post.question,
        winner: post.winner,
        content: post.content
      });
    }
  });

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
