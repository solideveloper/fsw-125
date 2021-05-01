
const 
    express = require('express');
    app = express();

    songsRouter = require('./routes/songsRouter')
    albumsRouter = require('./routes/albumsRouter')
    artistsRouter = require('./routes/artistsRouter')

    PORT = 3000;

//Application Level Middleware
app.use
    (express.json()) 
    ('/songs', songsRouter)
    ('/albums', albumsRouter)
    ('artists', artistsRouter)
 
 app.listen(PORT, () => {
     console.log(`The server running on Port: ${PORT}`)
 })

 //I'm using a mac....  After npm install -g nodemon I was having permission issues as well as 'command not found' when trying to run 'nodeman server.js'. I added the script: 'dev": "npx nodemon server.js' in my package.json and I used npx nodeman server.js to run port 3000.  I used both these commands after googling and not sure I understand which of the two worked. When I try to run nodemon server.js I continually get command not found.. I'm sure it has to do with permission. but i dont know how to get TO those permissions. -need help understanding. 