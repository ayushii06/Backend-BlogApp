const express = require("express");
const cors = require("cors");
require("dotenv").config();
const blog = require("./routes/blog");
const connectWithDb = require("./config/database");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Access-Control-Allow-Origin');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use("/api/v1",blog);

connectWithDb();

app.listen(PORT, ()=>{
    console.log(`App is running at Port No. ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send(`<h1>This is Home Page</h1>`)
})
