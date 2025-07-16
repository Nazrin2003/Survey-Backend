const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/create_survey",(request,response)=>{
    const name = (request.body.name)
    const gender = (request.body.gender)
    const blood = (request.body.blood)
    const mobile_no = (request.body.mobile_no)
    const pin = (request.body.pin)

    response.json({
        "name":name,
        "gender":gender,
        "blood":blood,
        "mobile":mobile_no,
        "pin":pin
    })
})

app.listen(4000,()=>{
    console.log("Server is running on :http://localhost:4000/create_survey")
})