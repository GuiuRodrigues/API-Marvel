const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async(req, res) => {
    const apikey = 'ea9495063253fe49b5e7b64a77bbf953'
    const ts = '1'
    const hash = 'd18c1b5d5fa336ca652750a8bb2e3f2d'

    try {
        const { data } = await axios(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&nameStartsWith=iron man`)

        return res.json(data)
    } catch (error) {
        console.error(error)
    }

})

app.listen('4331')