const Post = require("../models/postModel")

const postCtrl = {
    getPosts: async (req, res) => {
        const posts = await Post.find()
        return res.json({ woooow: posts })
    },
    getPost: async (req, res) => {
        const post = await Post.findOne({ _id: req.params.id })
        return res.json({ data: post })
    },
    addPost: async (req, res) => {
        console.log(req.body)
        const post = new Post({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            resume: req.body.resume
        })
        await post.save()
        return res.json({ msg: 'post added successfuly!!', data: post })
    },
    updatePost: async (req, res) => {
        const updatedPost = await Post.findByIdAndUpdate({ _id: req.params.id }, {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            resume: req.body.resume
        })
        return res.json({ data: updatedPost })
    },
    deletePost: async (req, res) => {
        const deletedPost = await Post.findByIdAndDelete({ _id: req.params.id })
        return res.json({ data: deletedPost })
    }
}

module.exports = postCtrl