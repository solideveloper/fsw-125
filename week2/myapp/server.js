
const express = require('express');
const app = express();

const songsRouter = require('./routes/songsRouter')
const albumsRouter = require('./routes/albumsRouter')
const artistsRouter = require('./routes/artistsRouter')

const PORT = 3000;

//Application Level Middleware
app.use('/songs', songsRouter)
app.use('/albums', albumsRouter)
app.use('/artists', artistsRouter)
 
 app.listen(PORT, () => {
     console.log(`The server running on Port: ${PORT}`)
 })

 //I'm using a mac....  After npm install -g nodemon I was having permission issues as well as 'command not found' when trying to run 'nodeman server.js'. I added the script: 'dev": "npx nodemon server.js' in my package.json and I used npx nodeman server.js to run port 3000.  I used both these commands after googling and not sure I understand which of the two worked. When I try to run nodemon server.js I continually get command not found.. I'm sure it has to do with permission. but i dont know how to get TO those permissions. -need help understanding. 