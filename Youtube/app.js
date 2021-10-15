const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

//create express app
const app = express()

// database
//myFirstDatabase is your database/ if this db name not exist it will auto add new db name 
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.je9kg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
})
const db= mongoose.connection;
db.once('open', () => {
  console.log('connected to mongo db')
})

// middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())






//routes
app.get('/', (req, res) => {
  res.send('hello')
})
const QuotesRoute = require('./routes/Quotes')
app.use('/api/v1/quotes', QuotesRoute)

app.listen(3000, () => {console.log('Listen on port 3000')})