const express=require('express')
const app=express()

const reqFilter=((req,res,next)=>{
    if(!req.query.age)
    {
            res.send("Plese Enter Ahe")
    }else if(req.query.age<18)
    {
          res.send("You  Are not Eligible for This File TO access")
    }
      else{
             next()
          }
}); 


         app.get('/login',(req, res)=>{                                    //   not any use middleware 
         res.send("Welcome To login Page")
   }) 




          app.get('/help',reqFilter,(req, res)=>{                          //    Single Level Middleware  
           res.send("Welcome To login Page")
}) 


 app.use(reqFilter)                                                          // Applicaltion Level Middleware 

       app.get('/home',(req,res)=>{
       res.send("Welcome To Home Page")
})
 
        app.get('/about',(req, res)=>{
        res.send("Welcome to Abouts Page")
})
app.listen(2020)
