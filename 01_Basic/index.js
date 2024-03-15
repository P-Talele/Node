const app = require('./app.js')
const fs=require('fs')

var num1=10
let num2=20
const num3=30
console.log(num1)
console.log(num2)
console.log(num3)


var num='10'

if(num===10)      // not match because === check also data type 
{
    console.log("Match")
}else
{
    console.log("Not Match")
}

var num='10'

if(num==10)      // match because == check not  data type check only value of Two variable  
{
    console.log("Match")
}else
{
     console.log("Not Match")
}

for (var i=1; i<=10; i++)
{
     console.log(i)
}

console.log(app.n)
console.log(app.b)
console.log(app.d)

const arr=[1,2,3,4,5,8,3]
arr.filter((item)=>{
       console.log(item)
})

arr.filter((element)=>{
      console.log("With Arrow Function="+element)
})

  let result= arr.filter((item)=>{
      return item===3
  })
console.log("Check how many Time of Repeat 3= "+result)

fs.writeFileSync("hallo.txt","how many type inheritance in java ")  // local module 
  console.log(" how many type inheritance in java ")// Global module   
