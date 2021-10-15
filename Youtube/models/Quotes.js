const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({
    content: String,
    author: String,
    
}
//create timestamp optional
,{
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
}
)

// Quote is your table name
module.exports = mongoose.model('Quote', QuoteSchema)