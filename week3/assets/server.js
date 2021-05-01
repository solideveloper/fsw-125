var express = require('express');
var app = express();

// other operators >, <, >=, ===, ==,  +=

// defining a new variable called PORT and setting it equal to 
// JS double pipe operator 
// double pipes
// thing on left side if exists -or- a default value 
const PORT = process.env.PORT || 5000;


//define fx that takes in 1 arb parameter and console logs it
const logAllTheThings = (par) => {
    console.log(par)
}

//envoke said function and pass in PORT variable
// logAllTheThings(PORT)


// a singular route
app.get('/', (req, res, next) => {
    res.send('hello world')
})



// send method is invoked method style meanign it is a direct prototype of the res stream 
// method style invocation of a function is always on a method and the reciever is an object usually

// console log "Starting server on port 5000" upon start
app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`)
})


