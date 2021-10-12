const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /order'
  })
})

router.get('/:orderId', (req, res, next) => {
  const id = req.params.orderId
  if (id === 'special'){
      res.status(200).json({
        message: 'Handling GET request to /order/orderId'
      })
  }else{
    res.status(200).json({
      message: `order id = ${id}`
    })
  }
})

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling POST request to /order'
  })
})

router.patch('/:order', (req, res, next) =>{
  const id = req.params.productId

  res.status(200).json({
    message:`Handling Patch order ID ${id}`
  })
})

router.delete('/:orderId', (req, res, next) =>{
  const id = req.params.orderId
  res.status(200).json({
    message: `Handling delete order ID ${id}`
  })
})


module.exports = router