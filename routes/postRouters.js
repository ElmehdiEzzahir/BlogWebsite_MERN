const postCtrl = require('../controllers/postCtrl')
const router = require('express').Router()

router.get('/post', postCtrl.getPosts)
router.get('/post/:id', postCtrl.getPost)
router.post('/post', postCtrl.addPost)
router.put('/post/:id', postCtrl.updatePost)
router.delete('/post/:id', postCtrl.deletePost)

module.exports = router