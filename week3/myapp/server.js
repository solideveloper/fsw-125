const
    express = require("express");
    app = express();
    PORT = 3000;

app.use
    (express.json());
    ("/bounties", require("./routes/bountyRouter.js"));

app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`)
})
