//blog.route.js

const express = require('express');
const app = express();
const blogRoutes = express.Router();

// Require Blog model in our routes module
let Blog = require('../models/Blog');

//Defined store route
blogRoutes.route('/add').post(function (req, res) {
    let blog = new Blog(req.body);
    blog.save()
        .then(blog => {
            res.status(200).json({'blog': 'blog in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

//Define get data(index or listing) route
blogRoutes.route('/').get(function (req, res) {
    Blog.find(function (err, blogs) {
        if(err){
            console.log(err);
        }
        else{
            res.json(blogs);
        }
    });
});

module.exports = blogRoutes;