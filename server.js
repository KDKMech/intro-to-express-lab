const express = require(`express`);
const morgan = require(`morgan`);
const app = express();
const PORT = 3000;


app.use(morgan(`dev`));

