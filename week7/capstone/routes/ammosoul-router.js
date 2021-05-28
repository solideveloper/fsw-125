const express = require("express");
const ammosoulRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const flavors = [
  {
    name: "SoulAmmo",
    image: "https://user-images.githubusercontent.com/72266712/100528687-58920580-31ad-11eb-9bdd-2057ed1b9f65.jpg",
  
    mainfruit: "Elderberries",
    type: false,
    price: 20,
    color: "beige",
    _id: uuidv4(),
  },
  {
    name: "Strawbanie ",
    image: "https://user-images.githubusercontent.com/72266712/100528465-21225980-31ab-11eb-8ec7-ec1cd8c9b67e.jpg",
    mainfruit: "Strawberries",
    type: false,
    price: 35,
    color: "pink",
    _id: uuidv4(),
  },
  {
    name: "Applia",
    image: "https://user-images.githubusercontent.com/72266712/100528464-21225980-31ab-11eb-92ed-955dff592e60.jpg",
    
    mainfruit: "Apples",
    type: true,
    price: 25,
    color: "green",
    _id: uuidv4(),
  },
  {
    name: "Maxberry",
    image: "https://user-images.githubusercontent.com/72266712/100528470-2b445800-31ab-11eb-8ed7-dc47ffd1ff1d.jpg",
    mainfruit: "Berries",
    type: true,
    price: 40,
    color: "red",
    _id: uuidv4(),
  },
  {
    name: "Bluezberry",
    image: "https://user-images.githubusercontent.com/72266712/100528463-2089c300-31ab-11eb-8689-58cea3eeafcb.jpg",
    mainfruit: "Blueberries",
    type: true,
    price: 35,
    color: "blue",
    _id: uuidv4(),
  },
];

ammosoulRouter

  .get('/', (req, res, next) => {
    res.status(200).send(flavors);
  }) //GET all


  
  .get('/:flavorId', (req, res, next) => {
    const flavorId = req.params.flavorId;
    const singularFlavor = flavors.find((flavor) => flavor._id === flavorId);
    if (!singularFlavor) {
      const error = new Error("No Matching Criteria");
      return next(error);
    }
    res.status(200).send(singularFlavor);
  }) //GET one


  
  .get('search/_id', (req, res, next) => {
    const flavorId = req.query._id;
    const filteredFlavor = flavors.filter((flavor) => flavor._id === flavorId);
    if (!filteredFlavor) {
      const error = new Error("No Matching Criteria");
      return next(error);
    }
    res.status(200).send(filteredFlavor);
  }) //GET by id


  .get('/search/type', (req, res, next) => {
    const type = req.query.type;
    console.log(type);

    if (!type) {
      const error = new Error("You must provide a valid type.");
      return next(error);
    }
    const filteredFlavor = flavors.filter(flavor => flavor.type === type);
    res.status(200).send(filteredFlavor);
  }) //GET by type

  
  .post('/', (req, res, next) => {
    const newFlavor = req.body;
    newFlavor._id = uuidv4();
    flavors.push(newFlavor);

    res.status(201).send(newFlavor);
  }) //POST one

  .delete('/:flavorId', (req, res, next) => {
    const flavorId = req.params.flavorId;
    const flavorIndex = flavors.findIndex((flavor) => flavor._id === flavorId);
    flavors.splice(flavorIndex, 1);

    res.send("Resource successfully deleted!");
  }) //DELETE one

  .put('/:flavorId', (req, res, next) => {
    const flavorId = req.params.flavorId;
    const flavorIndex = flavors.findIndex((flavor) => flavor._id === flavorId);
    Object.assign(flavors[flavorIndex], req.body);
    res.status(201).send("Resource Successfully Updated!");
  }); //EDIT one

module.exports = ammosoulRouter;