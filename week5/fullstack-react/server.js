const express = require('express');
const app = express();
const morgan = require('morgan')

const PORT = 9000;

app.use(express.json());
app.use(morgan('dev'))

app.use("/bounties", require("./routes/bountyRouter.js"));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});