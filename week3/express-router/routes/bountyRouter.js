const express = require("express");
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const bounties = [
    { firstName: "Luke", lastName: "Skywalker", living: false, bountyAmount: 220, type: "Jedi", _id: uuidv4() },
    { firstName: "Obi-Wan ", lastName: "Kenobi", living: false, bountyAmount: 41, type: "Jedi", _id: uuidv4() },
    { firstName: "Darth", lastName: "Vader", living: false, bountyAmount: 500, type: "Sith", _id: uuidv4() },
    { firstName: "Qui-Gon", lastName: "Jinn", living: false, bountyAmount: 97, type: "Jedi", _id: uuidv4() }
];

bountyRouter
    .get('/', (req, res) => {
    res.send(bounties)
    })
    .post('/', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    
    console.log(bounties)
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`);
})
module.exports = bountyRouter;