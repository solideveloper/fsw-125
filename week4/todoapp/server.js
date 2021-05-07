const express = require('express');
const app = express();
const morgan = require('morgan')


app.use(express.json());
app.use(morgan('dev'))

app.use("/todolist", require("./route/todoList.js"));

app.listen(7000, () => {
    console.log("Server running on Port 7000.")
});