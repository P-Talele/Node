const express=require('express')
const app=express();
 
app.get("",(req,res)=>{
    res.send("<h1>Welcome to home page</h1>")
    console.log("my name is Prashnat"+req.query.name)
      });
app.get('/about',(req, res)=>{
   res="welcome to Abouts page"
     });
app.get('/career',(req, res)=>{
      res="welcome to career page"
      res.send("this is  career page")
      });
app.get('/contact',(req, res)=>{
   res="welcome to contact page"
 });
  app.listen(4040);