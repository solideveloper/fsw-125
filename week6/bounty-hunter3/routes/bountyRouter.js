const express = require("express");
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const bounties = [
    { firstName: "Luke", lastName: "Skywalker", living: false, bountyAmount: 200000, type: "Jedi", _id: uuidv4() },
    { firstName: "Obi-Wan ", lastName: "Kenobi", living: false, bountyAmount: 150000, type: "Jedi", _id: uuidv4() },
    { firstName: "Darth", lastName: "Vader", living: false, bountyAmount: 140000, type: "Sith", _id: uuidv4() },
    { firstName: "Qui-Gon", lastName: "Jinn", living: false, bountyAmount: 130000, type: "Jedi", _id: uuidv4() }
];

bountyRouter
    .get('/', (req, res, next) => {
        res.status(200).send(bounties);
    }) //GET all

    .get('/:bountyId', (req, res, next) => {
        const bountyId = req.params.bountyId;
        const singularBounty = bounties.find(bounty => bounty._id === bountyId);
        if (!singularBounty) {
            const error = new Error('No Matching Criteria');
            return next(error);
        }
        res.status(200).send(singularBounty)
    }) //GET one

    .get('search/_id', (req, res, next) => {
        const bountyId = req.query._id;
        const filteredBounty = bounties.filter(bounty => bounty._id === bountyId);
        if (!filteredBounty) {
            const error = new Error('No Matching Criteria');
            return next(error);
        }
        res.status(200).send(filteredBounty)
    }) //GET by id

    .get("/search/type", (req, res, next) => {
        const type = req.query.type
        console.log(type)
    
        if(!type){
            const error = new Error("You must provide a valid type.")
            return next(error)
        }
        const filteredBounty = bounties.filter(bounty => bounty.type === type)
        res.status(200).send(filteredBounty)
    })//GET by type

    .post('/', (req, res, next) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        
        res.status(201).send(newBounty);
})  //POST one

    .delete('/:bountyId', (req, res, next) => {
        const bountyId = req.params.bountyId;
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
        bounties.splice(bountyIndex, 1);
        
        res.send ('Resource successfully deleted!')
    }) //DELETE one

    .put('/:bountyId', (req, res, next) => {
        const bountyId = req.params.bountyId;
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
        Object.assign(bounties[bountyIndex], req.body );
        res.status(201).send('Resource Successfully Updated!')
    }) //EDIT one
    
module.exports = bountyRouter;