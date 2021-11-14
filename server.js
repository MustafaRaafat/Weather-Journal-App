// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express =  require('express');

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));



// Setup Server
const port =8000;
const Server=app.listen(port,listening);

function listening() {
    console.log(`server running on port : ${port}`);
}
const data=[];
app.post("/mustafa", function(req,res) {
data.push(req.body);
console.log(data)
})

const citydata=[];
app.post("/getcity",function(req,res) {
    citydata.push(req.body);
    console.log(citydata);
})
