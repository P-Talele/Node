const express=require('express')
const app=express();
 
app.get('/',(req,res)=>{
    res="Welcome to home page"
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
  app.listen(3030);