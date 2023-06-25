//This is where we build the routes to accept API requests - POST, GET, PUT, DELETE

const express = require ('express')
const router = express.Router()

const templateServices = require ('../Bl/template.services')

//We're going to import our authentication here as middleware.
//Before a user is allowed to visit a page, we'll authenticate their token using JWT

const auth = require ('../Config/auth')

//Sample function using GET:

router.get ("/", auth.verify, async (req,res)=>{
    try{

    }
    catch (err){

    }
})

module.exports = router