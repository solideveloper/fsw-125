const express = require("express");
const app = express();

const bountyRouter = require('./routes/bountyRouter');

const PORT = 9000;

app.use(express.json());

app.use('/bounties', bountyRouter);

app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
})