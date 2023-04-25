require('dotenv').config()

const express = require('express')
const mongose = require('mongoose')
const bodyParser = require('body-parser')
const cookies = require('cookie-parser')

//routes
const AuthRouter = require('./routes/AuthRoute')
const SysAdminRoter = require('./routes/SysAdminRoute')
const StoreRouter = require('./routes/StoreRoute')

const app = express()

app.use(cookies())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//routing
app.use(AuthRouter)
app.use(SysAdminRoter)
app.use(StoreRouter)

const port = process.env.PORT || 3001
mongose.connect('mongodb+srv://haniffdrz:hanif07032000@cluster0.jxfamyc.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})
.catch(err => console.log(err))
