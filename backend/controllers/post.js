const Post = require('../models/Post')

async function showAll (req, res) {

    try {
        const posts = await Post.showAll()
        console.log('this will go back to frontend: ', posts)
        res.json(posts)
    } catch (error) {
        console.log('Can\'t fetch posts from database')
    }

}

async function create (req, res) {

    try {
        const posts = await Post.create(req.body.title, req.body.text)
        res.json(posts)
    } catch (error) {
        console.log('Can\'t create new post')
    }

}

module.exports = {
    showAll,
    create
}
