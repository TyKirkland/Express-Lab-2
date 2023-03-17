const express = require('express');

const app = express();

app.get('/greeting/:name', (req, res) => {
    res.send(`What's up, ${req.params.name}`);
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const totalTip = req.params.total * (req.params.tipPercentage / 100);
    res.json(totalTip);
})

const magicBallPhrases = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get('/magic/:phrase', (req, res) => {
    let randomPhrase = Math.floor(Math.random() * 20);
    res.send(`
       <h1>${req.params.phrase}? The answer is... ${magicBallPhrases[randomPhrase]}</h1>
    `);
})

//keep this at the bottom of our file
app.listen(3000, () => {
    console.log("Server started...");
})

app.get('/', (req, res) => {
    res.send(`
        99 Bottles of beer on the wall </br>
        <a href="http://localhost:3000/98">Take one down...</a>
    `);
})

app.get('/0', (req, res) => {
    res.send(`0 Bottles of beer on the wall! </br> <a href="http://localhost:3000/">Put them back up?</a>`)
})


app.get('/:number', (req, res) => {
    let reducingNumber = req.params.number - 1;
    res.send(`${req.params.number} Bottles of beer on the wall... </br>
    <a href="http://localhost:3000/${reducingNumber}">Take one down...</a>    
    `);
})
