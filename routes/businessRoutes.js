const express = require('express');
const businessRoutes = express.Router();

// Require Business model in our routes module
let Posts = require('./model.post');

// Defined store route
businessRoutes.route('/add').post(function (req, res) {
  let posts = new Posts(req.body);
  posts.save()
    .then(posts => {
      res.status(200).json({'posts': 'seed added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
businessRoutes.route('/index').get(function (req, res) {
    Posts.find(function(err, posts){
    if(erp){
      console.log(err);
    }
    else {
      res.json(posts);
    }
  });
});
