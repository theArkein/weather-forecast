let fetch = require('./fetch.js');

let start = (app)=>{
    
    app.get('/',(req,res)=>{
        res.render('index',{"app":app.variables});        
    })

    app.get("/weather",(req,res)=>{
        let query = req.query.address;
        console.log(query);
        fetch.fetchWeather(query,(err,data)=>{
            res.send({err,data})
        })        
    })

    app.get('/about',(req,res)=>{
        res.render('about',{"app":app.variables});
    })

    app.get('/api',(req,res)=>{
        fetch.fetchWeather("Kathmandu",(err,data)=>{
            res.send({err,data})
        })
    })
    app.get('*',(req,res)=>{
        app.variables.requestPage = req.url;
        res.render('404',{"app":app.variables});
    })
}   
module.exports = {
    start
}