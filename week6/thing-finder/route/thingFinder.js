const express = require("express");
const thingFinder = express.Router();
const { v4: uuidv4 } = require('uuid');


const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4()
    },
    {
        name: "pants",
        type: "clothing",    
        price: 2500,
        _id: uuidv4()
    },
    {
        name: "basketball",
        type: "toy",
        price: 1000,
        _id: uuidv4()
    },
    {
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4()
    },
    {
        name: "boardgame",
        type: "toy",
        price: 300,
        _id: uuidv4()
    },
    {
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4()
    },
    {
        name: "rice",
        type: "food",
        price: 700,        
        _id: uuidv4()
    }
];


// GET ALL
thingFinder
     .get("/", (req, res) => {
     res.status(200).send(inventoryItems)
 })
 
 
 // GET BY TYPE
     .get("/search/type", (req, res, next) => {
     const type = req.query.type
     console.log(type)
 
     if(!type){
         const error = new Error("You must provide a valid type.")
         return next(error)
     }
     const filteredInventory = inventoryItems.filter(items => items.type === type)
     res.status(200).send(filteredInventory)
 });
 
 
 module.exports = thingFinder