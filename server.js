const express = require('express');

const Pizza = require('./models/pizzaModel')

const db = require("./db.js")

const app = express();



// Configure body parser
app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')

const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

app.use('/api/pizzas/',pizzasRoute)
app.use('/api/users/' , userRoute)
app.use('/api/orders/',ordersRoute)

// Create a route that responds with "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!'+port); 
});



// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => 'Server running on port'
);