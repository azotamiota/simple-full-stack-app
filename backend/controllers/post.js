const Post = require('../models/Post')

async function showAll (req, res) {

    try {
        const posts = await Post.showAll()
        console.log('this goes back to frontend after loading the page: ', posts)
        res.json(posts)
    } catch (error) {
        console.log('Can\'t fetch posts from database')
    }

}

async function create (req, res) {

    try {
        const posts = await Post.create(req.body.title, req.body.text)
        console.log('These argument sent to Post.Create: ', req.body)
        console.log('this goes back to frontend after a new post created: ', posts.rows[0])

        res.json(posts)
    } catch (error) {
        console.log('Can\'t create new post')
    }

}

module.exports = {
    showAll,
    create
}
