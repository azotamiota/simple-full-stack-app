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
}

module.exports = Post
