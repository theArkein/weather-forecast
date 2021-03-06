let express = require('express');
let hbs = require('hbs');
let path = require('path');

let route = require('./routes.js');

let app = new express();
const PORT = process.env.PORT || 3000
// Declaring Global App Variables
app.variables = {
    title : "Weather App",
    publicDirectoryPath : path.join(__dirname,'../public'),
    }

// Set View Engiene
app.set('view engine','hbs')

// Route Setup For Static Files
app.use(express.static(app.variables.publicDirectoryPath));


// Watch Route Requests
route.start(app);

// App port Setup
app.listen(PORT,()=>{
    console.log("Listening to port ", PORT);
})