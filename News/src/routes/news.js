const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')


newsRouter.get('/', async(req, res) => {

  try {
    const newsApi = await axios.get('https://raddy.co.uk/wp-json/wp/v2/posts/')
    res.render('news', {articles: newsApi.data})
    
  } catch (err) {
    if(err.response){
      res.render('news', {articles: null })
      console.log(err.response.data)
      console.log(err.response.status)
      console.log(err.response.headers)
    }else if(err.request){
      res.render('news', {articles: null })
      console.log(err.request.data)
    }else{
      res.render('news', {articles: null })
      console.log('Error', err.message)
    }
  }

})

newsRouter.get('/article/:id', async(req, res) => {
  const id = req.params.id
  try {
    const newsApi = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${id}`)
    res.render('newsSingle', {article: newsApi.data})
    
  } catch (err) {
    if(err.response){
      res.render('news', {article: null })
      console.log(err.response.data)
      console.log(err.response.status)
      console.log(err.response.headers)
    }else if(err.request){
      res.render('news', {article: null })
      console.log(err.request.data)
    }else{
      res.render('news', {article: null })
      console.log('Error', err.message)
    }
  }

})


newsRouter.post('/', async(req, res) => {
  const search = req.body.search
  try {
    const newsApi = await axios.get(`http://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`)
    res.render('newsSearch', {articles: newsApi.data})
    
  } catch (err) {
    if(err.response){
      res.render('news', {articles: null })
      console.log(err.response.data)
      console.log(err.response.status)
      console.log(err.response.headers)
    }else if(err.request){
      res.render('news', {articles: null })
      console.log(err.request.data)
    }else{
      res.render('news', {articles: null })
      console.log('Error', err.message)
    }
  }

})



module.exports = newsRouter