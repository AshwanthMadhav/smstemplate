const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
    }
},{ timestamps: true })

module.exports = mongoose.model('smsUrls', urlSchema)