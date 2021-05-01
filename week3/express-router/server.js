const express = require("express");
const app = express();
const PORT = 4000;

app.use
    (express.json());
    ("/bounties", require("./routes/bountyRouter.js"));

app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`)
})