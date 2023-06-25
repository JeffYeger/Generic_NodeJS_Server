//This is where you'll define the main route for ALL of the different entities (ישויות)

//For example:

const express = require ('express')
const app = express()

app.use ('/template1', require ('../Router/template.route'))
app.use ('/template2', require ('../Router/template.route'))
app.use ('/template3', require ('../Router/template.route'))
