const express = require(`express`);
const morgan = require(`morgan`);
const app = express();
const PORT = 3000;


app.use(morgan(`dev`));

app.get(`/greetings/:username`, (req, res) =>  {
    const username = req.params.username;
    res.send(`Hello There, ${username}`)
})

app.get(`/roll/:number`, (req, res) => {
    const diceNumber = req.params.number;
    const randomNumber = Math.floor(Math.random() * diceNumber) + 1
    res.send(`you rolled a ${randomNumber}`)
})


















app.listen(PORT, () => {
    console.log(`listening on port 3000`)
})