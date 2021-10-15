const express = require('express')
const router = express.Router()
const Quote = require('../models/Quotes')

//get all quotes
router.get('/getAll', async (req, res) => {
  const quote = await Quote.find()
  res.json(quote)
})


//create new quote
router.post('/post/', async (req, res) => {
  const newQuote = new Quote(req.body)

  const saveQuote = await newQuote.save()

  res.json(saveQuote._id)
})


//get quote by id
router.get('/getId/:id', async (req, res) => {
  const quote = await Quote.findById({ _id: req.params.id })
  res.json(quote.author)
})


//update quote by id
router.patch('/update/:id', async (req, res) => {
  const result = await Quote.findByIdAndUpdate({ _id: req.params.id }, {$set: req.body})
  res.json(result)
})

//delete quote by id
router.delete('/delete/:id', async (req, res) => {
  const result = await Quote.findByIdAndDelete({ _id: req.params.id})
  res.json(result)
})

// get random quote
router.get('/random', async (req, res) => {
  const count = await Quote.countDocuments()
  const random = Math.floor(Math.random() * count)
  const result = await Quote.findOne().skip(random)
  res.json(result)
})

module.exports = router