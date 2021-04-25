const express = require('express');
const app = express();

const PORT = 3000;

const songs = [
     {
         name: "Bloodstream",
         writtenBy: "Ed Sheeran & Johnny McDaid"
     },
     {
         name: "Crazy For You",
         writtenBy: "Adele Adkins"
     },
     {
         name: "Piano & I",
         writtenBy: "Alicia Keys"
     },
     {   
         name: "Rhyme or Reason",
         writtenBy: "Marshal Mathers, R. Argent"
     },
     {   
         name: "Coffin",
         writtenBy: "Jessie Reyez, Andre Robertson, Marshall Mather, Tobias Frelin"
     }
 ]
 
 const artists = [
     {
         name: "Ed Sheeran",
         age: 30
     },
     {
         name: "Adele",
         age: 32
     },
     {
         name: "Alicia Keys",
         age: 40
     },
     {   
         name: "Eminem",
         age: 48
     },
     {   
         name: "Jessie Reyez",
         age: 29
     }
 ]
 
 const albums = [
     {
         name: "Take It Back",
         year: 2014
     },
     {
         name: "Adele 19",
         year: 2008
     },
     {
         name: "Talia Shire",
         year: 2001
     },
     {   
         name: "Lea Thompson",
         year: 2013
     },
     {   
         name: "Linda Fiorentino",
         year: 2020
     }
 ]
 
 app.get("/songs", (req, res) => {
     res.send(songs)
 })
 
 app.get("/artists", (req, res) => {
     res.send(artists)
 })
 
 app.get("/albums", (req, res) => {
     res.send(albums)
 })
 
 
 app.listen(PORT, () => {
     console.log("The server running on Port: 3000")
 })