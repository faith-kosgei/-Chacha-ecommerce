const express = require('express');
const mongoose = require('mongoose');ieparser =  require('cookie-parser');
const cookieparser =  require('cookie-parser');
const cors = require('cors');


// create db connection
mongoose.connect("mongodb+srv://kosgeif7:Charles2024@cluster0.1sgql.mongodb.net/")
.then (()=>
    console.log("MongoBD connected"))
.catch((error)=>
    console.log("error"));



const app = express();
const PORT = process.env.PORT || 5000;

app.use ( 
    cors({ 
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'DELETE','PUT'],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials:true
    })
);

app.use(cookieparser());
app.use(express.json());

app.listen(PORT, () => console.log(`server is now running on port ${PORT}`))
