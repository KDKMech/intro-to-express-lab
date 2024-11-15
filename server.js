const express = require(`express`);
const morgan = require(`morgan`);
const ejs = require(`ejs`);
const app = express();
const PORT = 3000;


app.use(morgan(`dev`));

app.get(`/greetings/:username`, (req, res) =>  {
    const username = req.params.username;
    res.send(`Hello There, ${username}`)
})

app.get(`/roll/:number`, (req, res) => {
        
    const diceNumber = req.params.number;
    if (isNaN(diceNumber)) {////learned the isNaN finction from microsoft copilot. I was having problems parsing the information to check.
        res.send(`${diceNumber} is not a valid number`)

    }
    else {
        const randomNumber = Math.floor(Math.random() * diceNumber) + 1
        res.send(`you rolled a ${randomNumber}`)
        
    }
})


const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


app.get(`/collectibles/:index`, (req, res) => {
    const index = parseInt(req.params.index)
    if (index >= 0 && index < collectibles.length) {
        const collectible = collectibles[index]
        res.send(`So you want the ${collectible.name}? That will cost ${collectible.price}`)
    }
        else {
        res.send(`This item is not in stock, please check back later`)
    

    }
})

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


app.get('/shoes', (req, res) => {
    let filteredShoes = shoes;
    const minPrice = req.query['min-price'];
    const maxPrice = req.query['max-price'];
    const type = req.query.type;

    if (minPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseFloat(minPrice));
    }

    if (maxPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseFloat(maxPrice));
    }

    if (type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    }

    const responseString = filteredShoes.map(shoe => `<h1>Name: ${shoe.name}, Price: ${shoe.price}, Type: ${shoe.type}</h1>`).join('');

    res.send(`<h1>${responseString}</h1>`)
});






























        


        
app.listen(PORT, () => {
            console.log(`listening on port 3000`)
        })
        
        
        
        
        
        
        
        
        
        

        
        
        
        
        // console.log(arrayLegnth)
        // const collectibles1 = collectibles
        // if (index < arrayLegnth && index >= 0) {
            //     res.send(`${collectibles1.indexOf[index]}`)
            // })
            //     }
            // }
            // app.get(`/collectibles/:index`, (req, res) => {
                //         filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseFloat(maxPrice))
        //     if (type) {
            //     const index = parseInt(req.params.index);
            //     const arrayLength = collectibles.length
            //     if (maxPrice) {
                //         filteredShoes = filteredShoes.filter(shoe => shoe.type === type)
                //     console.log(index, arrayLength, collectibles[1])
                //     }
                // }
                //     if (index < arrayLength && index >= 0) {
                        //     if (minPrice) {
                        //     const { 'min-price': minPrice, 'max-price': maxPrice, type } = req.query;///learned both destructuring and parsting from microsoft copilot. 
                        //         res.send(`<h1>${collectibles[index]}</h1>`)
                        //     }
                        // })
                        //    res.send(``)
                        //     filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseFloat(minPrice))
                        
                        // app.get(`/shoes`, (req, res) => {
                        //     let filteredShoes = shoes;
                        //     const minPrice = req.query[`min-price`]
                        //     const maxPrice = req.query[`max-price`]
                        //     const type = req.query.type
                        
                        //     if (minPrice) {
                            //         filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseFloat(minPrice))
                            
                        //     }
                        //     if (maxPrice) {
                            //         filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseFloat(maxPrice))
                            
                        //     }
                        //     if (type) {
                            //         filteredShoes = filteredShoes.filter(shoe => shoe.type === toString(type))
                            
                            //     }
                            //     const responseString = filteredShoes.map(shoe => )
                                //     res.send.toString(`${filteredShoes}`)
                                //     console.log(filteredShoes)
                                // })
                                
                        // res.send(`here is your filtered results: ${filteredShoes.name}${filteredShoes.price}${filteredShoes.type}`)
                        // res.send(`<html><head><title>Shoe Collection</title></head><body style="background-color: white;">${responseString}</body></html>`);