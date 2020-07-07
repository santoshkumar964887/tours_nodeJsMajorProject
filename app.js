const express=require('express');
const fs=require('fs');
const app=express();
app.use(express.json());
const tours=JSON.parse(fs.readFileSync(`${__dirname}/starter/dev-data/data/tours.json`));
app.get('/api/v1/tours',(req,res)=>{
    res.status(200).json({
        "status":'success',
        'length':tours.length,
        'data':{
            tours
        }
    });

});
app.post('/api/v1/tours',(req,res)=>{
    //console.log(req.body);
    let reqdata=req.body;
    let newId=(tours.length)+1;
    const newTour=Object.assign({id:newId},reqdata);
    tours.push(newTour);
    const write=fs.writeFile(`${__dirname}/starter/dev-data/data/tours.json`,JSON.stringify(tours),(err)=>{
        console.log(err);
    })

    res.status(201).json({
        "status":'success',
        "data":{
            "tour":newTour

        }

    })
});


const port=3000;
app.listen(port,()=>{
    console.log('App is running on port number 3000 ')

})