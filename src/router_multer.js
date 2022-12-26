const express = require('express')
const app = express()
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
const { Router } = require('express')
const router = Router()
router.get('/', (req, res)=>{

})

module.exports = router