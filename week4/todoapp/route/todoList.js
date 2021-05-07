const express = require("express");
const todoList = express.Router();
const { v4: uuidv4 } = require('uuid');


const listItems = [
    {
        name: "Laundry",
        description : "Wash, Dry, Fold, Put Away",
        imgUrl: "https://user-images.githubusercontent.com/72266712/117384081-2600dd00-aeb0-11eb-99c0-3bfb59203920.jpeg",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Exercise",
        description : "Complete Massy-Day3, Bike -90 Minutes",
        imgUrl: "https://user-images.githubusercontent.com/72266712/110992439-eac8ae80-8343-11eb-80ab-8f1df8fd7b5f.jpeg",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Supermarket",
        description : "Eggs, Bread, Milk, Cereal, Fruits, Vegetables",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Kitchen",
        description : "Wash Dishes, Clean Stove and Cabinets",
        imgUrl: "https://user-images.githubusercontent.com/72266712/110992699-472bce00-8344-11eb-835e-4902cfa614b2.jpeg",
        completed: true,
        _id: uuidv4()
    },
]


//Get All Items
todoList.route("/")
    .get((req, res) => {
    res.send(listItems)
    })

//Post Item/s
    .post((req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    listItems.push(newTodo)
    res.send(`Successfully added ${newTodo.name} to list!`)
});

//Get One Item
todoList.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo._id = uuidv4()
    const findToDo = listItems.find(todo => todo._id === todoId)
    res.send(findToDo)
})

//Delete Item
todoList.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo._id = uuidv4()
    const todoIndex = listItems.findIndex(todo => todo._id === todoId)
    listItems.splice(todoIndex, 1)
    res.send(`List item was deleted!`)
})

//Update Item - Put
todoList.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo._id = uuidv4()
    const todoIndex = listItems.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(listItems[todoIndex], req.body) 
    res.send(updatedTodo)
})


module.exports = todoList