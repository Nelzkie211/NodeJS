const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /product'
  })
})

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId
  if (id === 'special'){
      res.status(200).json({
        message: 'Handling GET request to /products/productId'
      })
  }else{
    res.status(200).json({
      message: `product id = ${id}`
    })
  }
})

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling POST request to /product'
  })
})

router.patch('/:productId', (req, res, next) =>{
  const id = req.params.productId

  res.status(200).json({
    message:`Handling Patch product ID ${id}`
  })
})

router.delete('/:productId', (req, res, next) =>{
  const id = req.params.productId
  res.status(200).json({
    message: `Handling delete product ID ${id}`
  })
})


module.exports = router