const express = require('express');
const mongoose = require('mongoose');

const app = express(); 

mongoose.connect('mongodb://localhost:27017/Employee', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Connection to MongoDB failed:", error);
    });


const EmpSchema = new mongoose.Schema({
    name: String,
    email: String
});


const EmpModel = mongoose.model("Emp_table", EmpSchema);

app.get("/getemptable", async (req, res) => {
    try {
        const employees = await EmpModel.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// http://localhost:3001/getemptable