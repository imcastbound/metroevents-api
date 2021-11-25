const express = require('express')
const app = express()
const userData = require('./metroevents_users.json')
const eventData = require('./metroevents_events.json')

const port = process.env.PORT || 3000

app.get('/', (req ,res)=>{
    res.send()
})

app.get('/metroevents', (req, res)=>{
    res.send(userData)
})

app.get('/events', (req, res)=>{
    res.send(eventData)
})

app.listen(port, ()=> {
    console.log('App is listening to port ${port}')
})