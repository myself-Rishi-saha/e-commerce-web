const express=require('express');
const app=express();
const path=require('path');
const product=require('./data');
const { type } = require('os');


app.use(express.static(path.join(__dirname,'./Homepage')))
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'Homepage/index.html'))
})
app.get('/api/product',(req,res)=>{
 const newproduct=product.map((product)=>{
   const {id,category,image,link,price}=product;
    return {id,category,image,link,price}
    

 })
 res.json(newproduct);

})
app.get('/api/product/:prodcat',(req,res)=>{
    console.log(req.params)
 const {prodcat} =req.params
 const singleProduct=product.find(
    (product)=> (product.category).includes(prodcat)
 )
 res.json(singleProduct)
})

app.get('*',(req,res)=>{
    console.log("not good....",req.params)
    
   
  }) 
 
app.listen(5000,()=>{
    console.log("running....")
    let x=product;
    console.log(type(x))
})