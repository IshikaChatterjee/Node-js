const express = require('express')
const mongoose = require('mongoose')

const app = express

mongoose.connect('mongodb://localhost:27017/Employee')


const EmpSchema = new mongoose.Schema({
    name : String,
    email : String
})

const EmpModel = mongoose.model("Emp_table", EmpSchema)

app.get("/getemptable", (req,res) => {

    EmpModel.find({}).then(function(emptable){
      res.json(emptable)
    }).catch(function(err){
        console.log(err)
    })

})
app.listen(3001, () =>{

   console.log("Node-js is running")
}) 