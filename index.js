const express = require('express');
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;
app.use(cors())

const allProducts = require('./Data/poducts.json')

app.get('/', (req, res) => {
    res.send(allProducts)
})

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const singleProduct = allProducts.find(p => p.id == id)
    res.send(singleProduct)
})

app.get('/category/:name', (req, res) => {
    const name = req.params.name;
    const catagory_products = allProducts.filter(p => p.category == name)
    res.send(catagory_products)
})



app.listen(port, () => {
    console.log(`server is running on port : ${port}`)
})


module.exports = app;