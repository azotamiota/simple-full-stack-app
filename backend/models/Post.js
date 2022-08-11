const postDatabase = require('../dbConfig/init')

class Post {
    constructor(data) {
        this.title = data.title
        this.text = data.text
    }

    static showAll () {

    }
}

module.exports = Post
