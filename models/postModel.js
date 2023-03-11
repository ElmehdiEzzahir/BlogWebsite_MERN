const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    description: {
        type: String
    },
    resume: {
        type: String
    },
})

const Post = mongoose.model('post', PostSchema)

module.exports = Post