require ('dotenv').config()

require ('./DL/db').connect()

const express = require ('express')

const app = express()

app.use (express.json())

const cors = require ('cors')
app.use (cors())

const port = process.env.PORT

//Here you'll import your mainRoutes



app.listen(port,()=>{
    console.log ('Server is up 🖥️')
})