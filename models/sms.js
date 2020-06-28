const mongoose = require('mongoose')

const smsSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
},{ timestamps: true })

module.exports = mongoose.model('sms', smsSchema)