const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const path = require("path");
const data = require("./models/data.js");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

main()
  .then((res) => {
    console.log("connection successful..");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/JobApplication");
}

app.get("/registers",(req,res)=>{
    res.render("index.ejs");
});

app.post("/registers", async(req,res)=>{
    try{
        const newdata = new data({
            first:req.body.first,
            last:req.body.last,
            email:req.body.email,
            job:req.body.job,
            address:req.body.address,
            city:req.body.city,
            date:req.body.date,
            pincode:req.body.pincode,
            age:req.body.age,
        })
        const registered= await newdata.save();
        console.log(newdata);
        res.redirect("/registers");
    }catch(err){
        res.send(err);
    }
})

app.listen(port, (req, res) => {
    console.log("listining on port no. 3000");
  });