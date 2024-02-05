
console.log("***********First***********")
console.log("Car Start");
console.log("Car Slow");
console.log("Car Fast");



console.log("***********Second***********")
console.log("Car Start");
console.log("Car Fast");
setTimeout(()=>{
     console.log("Car Slow");
},2000)


let num1=20;
let num2=0

console.log(num1+num2)

setTimeout(()=>{
       console.log(num1+30)    //   second Executed 

},2000)

console.log(num1+num2)        //    first   Executed 



let a=20
let b=0

let watingData =new Promise((resole, reject)=>{

     setTimeout(()=>{
      resole(30)           
     },2000)
})

watingData.then((data)=>{
       let b=data
         console.log("Using Promises amd then function using="+(a+b))
})



function call()
{
       
        console.log("first log")                     // first execute

        setTimeout(()=>{
        console.log("second log")                     // fouth executed
        },2000)

       setTimeout(()=>{                              // third executed
         console.log("third log")
        },0)

         console.log("fouth log")                      // second execute
       }

       console.log(call())
