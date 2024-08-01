const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());




app.get("/",(req,res) =>{
    res.render("index.ejs");
    });

app.post("/submit",async (req,res)=>{
    const {fullName} = req.body;
    res.render("submit.ejs",{fullName});
})


app.listen(8080,()=>{
    console.log('Server is running on port 3000');
})