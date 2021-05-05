const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PeopleRoutes =require("./Routes/people");
const mysqlConnection =require("./connection");
var app = express();

// app.use(bodyParser.json());
// app.use("/people",PeopleRoutes);

app.get("/",(req,res)=>{
    res.send("hi")
})
    


app.listen(3000);
