const postDatabase = require('../dbConfig/init')

class Post {
    constructor(data) {
        this.title = data.title
        this.text = data.text
    }

    static async showAll () {
       return postDatabase.query('SELECT * FROM entry;')
            .then(res => res.rows.map(post => new Post(post)))
            .catch(error => console.log('Error while fetching data from entry table'))
    }

    static async create (title, text) {
        console.log('These are the title and text in Post.create() funciton: ', title, text)
        return postDatabase.query("INSERT INTO entry (title, text) VALUES ($1, $2) RETURNING *", [title, text])
            .catch(error => console.log('Can\'t create new Post: ', error.error))
    }
}

module.exports = Post
