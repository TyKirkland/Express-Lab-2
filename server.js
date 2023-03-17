const express = require('express');

const app = express();

app.get('/greeting', (req, res) => {
    res.send("Hello, stranger");
})

//keep this at the bottom of our file
app.listen(3000, () => {
    console.log("Server started...");
})