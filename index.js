const express = require('express')
const app = express()
const userData = require('./metroevents_users.json')

const port = process.env.PORT || 3000

// app.get('/', (req ,res)=>{
//     res.send("Metro Events API")
// })

app.get('/metroevents', (req, res)=>{
    res.send(userData)
})

app.listen(port, ()=> {
    console.log('App is listening to port ${port}')
})