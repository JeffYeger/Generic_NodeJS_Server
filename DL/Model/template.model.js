const mongoose = require ('mongoose')

const templateSchema = new mongoose.Schema({
    sample:{
        type: SAMPLE,
        required: 'MAYBE?'
    }
})

const templateModel = mongoose.model("template", templateSchema)

module.exports = templateModel