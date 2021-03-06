// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express=require('express');

// Start up an instance of app
const app=express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server

const port=8000;

const server=app.listen(port,lisme);

function lisme() {
    console.log(`server running on port: ${port}`)
}
// Initialize all route with a callback function

// Callback function to complete GET '/city'
app.get('/city',function (req,res) {
    res.send(projectData);
    console.log('getme');
});

// Post Route
app.post('/city',setCity);
function setCity(req,res) {
    projectData=req.body;
}
