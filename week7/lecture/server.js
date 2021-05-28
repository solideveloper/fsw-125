const express = require('express')
const app = express()
const PORT = 3000
const morgan = require('morgan')

app.use(morgan('dev')) // application level middleware

app.get('/books', (req, res, next) => {
     console.log('first stop');

     next()
})

app.get('/books', (req, res, next) => {
     console.log('second stop');

     req.body = {
          streamExample: true
     }

     next()
})

app.get('/books', (req, res, next) => {
     console.log('third stop');

     req.body.streamExample = false;

     res.send(req.body.streamExample) // false
})

// error handler 
// app.use((err, req, res, next) => {
//      res.send(err)
// })

app.listen(PORT, () => {
     console.log(`Example app listening at http://localhost:${PORT}`)
})






































