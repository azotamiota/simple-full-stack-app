const Post = require('../models/Post')

async function showAll (req, res) {

    try {
        const posts = await Post.showAll()
        res.json(posts)
    } catch (error) {
        console.log('Can\'t fetch posts from database')
    }

}

async function create (req, res) {

    try {
        const posts = await Post.create()
        res.json(posts)
    } catch (error) {
        console.log('Can\'t create new post')
    }

}

module.exports = {
    showAll,
    create
}
