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

    .get('/:bountyId', (req, res) => {
        const bountyId = req.params.bountyId;
        const singularBounty = bounties.find(bounty => bounty._id === bountyId);
        res.send(singularBounty)
    })

    .get('search/_id', (req, res) => {
        const bountyId = req.query._id;
        const filteredBounty = bounties.filter(bounty => bounty._id === bountyId);
        res.send(filteredBounty)
    })

    .post('/', (req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        
        res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`);
})

    .delete('/:bountyId', (req, res) => {
        const bountyId = req.params.bountyId;
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
        bounties.splice(bountyIndex, 1);
        res.send ('Resource successfully deleted!')
    })

    .put('/:bountyId', (req, res) => {
        const bountyId = req.params.bountyId;
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
        Object.assign(bounties[bountyIndex], req.body );
        res.send('Resource Successfully Updated!')
    })
module.exports = bountyRouter;