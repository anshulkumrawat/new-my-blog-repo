//Blogs.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for Blogs

let Blog = new Schema({
    person_name: {
        type:String
    },
    datetime:{
        type:Date
    },
    person_comments:{
        type:String
    }
},{
    collection: 'blog'
});

module.exports = mongoose.model('Blog', Blog);