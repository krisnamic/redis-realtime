const express = require('express')
const app = express()
const http = require('http')
const { default: redisRealtime } = require('@space-kit/redis-realtime-node')
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const server = http.createServer(app)
redisRealtime(server, 'redis://localhost:6379', 'mycustomdb')

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})