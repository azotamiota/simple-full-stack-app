const express = require('express')
const app = express()
const cors = require('cors')
const postRoutes = require('./routes/post')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/posts', postRoutes)


app.get('/', (req, res) => {
    
    res.status(200).json({message: "Welcome to the simple blog"})
})

module.exports = app;
