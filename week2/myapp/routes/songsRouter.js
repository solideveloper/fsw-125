const 
     { v4: uuidv4 } = require('uuid');
     express = require("express");
     songsRouter = express.Router();

     songs = [
     { name: "Bloodstream", writtenBy: "Ed Sheeran & Johnny McDaid", _id: uuidv4() },
     { name: "Crazy For You", writtenBy: "Adele Adkins", _id: uuidv4() },
     { name: "Piano & I", writtenBy: "Alicia Keys", _id: uuidv4() },
     { name: "Rhyme or Reason", writtenBy: "Marshal Mathers, R. Argent", _id: uuidv4() },
     { name: "Coffin", writtenBy: "Jessie Reyez, Andre Robertson, Marshall Mather, Tobias Frelin", _id: uuidv4() }
 ]

songsRouter
     .get("/", (req, res) => {
     res.send(songs)
 })
     .post("/", (req, res) => {
     const newSong = req.body;
     newSong._id = uuidv4()
     songs.push(newSong);
 
         console.log(songs)
     res.send(`Successfully added ${newSong.name} to the database`);
 })

 module.exports = songsRouter;