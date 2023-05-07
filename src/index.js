const express = require('express')
const pug = require('pug')
const app = express()
const port = 3000

app.use('/css', express.static('node_modules/bootstrap/dist/css'))

app.get('/', (req, res) => {
    res.send(pug.renderFile(__dirname + '/index.pug', {
        name: 'Yami'
    }))
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})