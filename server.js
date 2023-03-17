const express = require('express');

const app = express();

app.get('/greeting/:name', (req, res) => {
    res.send(`What's up, ${req.params.name}`);
})



//keep this at the bottom of our file
app.listen(3000, () => {
    console.log("Server started...");
})