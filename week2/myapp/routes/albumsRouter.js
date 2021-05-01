const 
     { v4: uuidv4 } = require('uuid');
     express = require("express");
     albumsRouter = express.Router();

     albums = [
     { name: "Take It Back", year: 2014 },
     { name: "Adele 19", year: 2008 },
     { name: "Talia Shire", year: 2001 },
     { name: "Lea Thompson", year: 2013 },
     { name: "Linda Fiorentino", year: 2020 }
 ]


 albumsRouter
     .get("/", (req, res) => {
     res.send(albums)
 })
     .post("/", (req, res) => {
     const newAlbum = req.body;
     newAlbum._id = uuidv4()
     albums.push(newAlbum);
 
         console.log(albums)
     res.send(`Successfully added ${newAlbum.name} to the database`);
 })

 module.exports = albumsRouter