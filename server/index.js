const express = require('express')


const getProducts = require('./getProducts')
const getProduct = require('./getproduct')

const app = express()
const port = 3333


app.get('/api/products', getProducts)
app.get('/api/products/:id', getProduct)

//app.get('/api/users/:id', getUserById)

app.listen(port, () => {
    console.log (`Now listening on port: ${port}`)
});



