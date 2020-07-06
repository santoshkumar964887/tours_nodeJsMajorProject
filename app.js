const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.status(200).send("hello from server")

})
app.post('/',(req,res)=>{
    res.status(200).send({
        name: 'santosh',
        age:21
    })
})


const port=3000;
app.listen(port,()=>{
    console.log('App is running on port number 3000 ')

})