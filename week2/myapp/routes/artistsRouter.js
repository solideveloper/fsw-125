const { v4: uuidv4 } = require('uuid');
const express = require("express");
const artistsRouter = express.Router();

let artists = [
     { name: "Ed Sheeran", age: 30 },
     { name: "Adele", age: 32 },
     { name: "Alicia Keys", age: 40 },
     { name: "Eminem", age: 48 },
     { name: "Jessie Reyez", age: 29 }
 ]

 artistsRouter.get('/', (req, res) => {
     res.send(artists)
 })
 artistsRouter.post('/', (req, res) => {
     const newArtist = req.body;
     newArtist._id = uuidv4();
     artists.push(newArtist);
 
         console.log(artists)
        res.send(`Successfully added ${newArtist.name} to the database`);
 })

 module.exports = artistsRouter;