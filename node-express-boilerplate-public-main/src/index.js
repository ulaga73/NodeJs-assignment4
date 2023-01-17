const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000


app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.post("/add", (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    if(isNaN(num1) || isNaN(num2)){
        return res.status(400).json({
            status: "error",
            message: "Invalid data types",
            result: "The request should be a number"
        })
    }
    res.status(200).json({
        status: "success",
        message: "the sum of given two numbers",
        result: num1 + num2
    })
})

app.post("/sub", (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    if(isNaN(num1) || isNaN(num2)){
        return res.status(400).json({
            status: "error",
            message: "Invalid data types",
            result: "The request should be a number"
        })
    }
    res.status(200).json({
        status: "success",
        message: "the difference of given two numbers",
        result: num1 - num2
    })
})

app.post("/multiply", (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    if(isNaN(num1) || isNaN(num2)){
        return res.status(400).json({
            status: "error",
            message: "Invalid data types",
            result: "The request should be a number"
        })
    }
    res.status(200).json({
        status: "success",
        message: "The product of given numbers",
        result: num1 * num2
    })
})

app.post("/divide", (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    if(isNaN(num1) || isNaN(num2)){
        return res.status(400).json({
            status: "error",
            message: "Invalid data types",
            result: "The request should be a number"
        })
    }
    res.status(200).json({
        status: "success",
        message: "The division of given numbers",
        result: num1 / num2
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;