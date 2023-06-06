require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

const cors = require('cors')

app.use(cors())

app.get('/', (req, res, next) => {
	res.send('Home Route!')
})

app.post('/test', (req, res, next) => {
	res.send(req.body, req.params, req.query)
})

app.listen(PORT, () => {
	console.log('listening on port', PORT)
})
