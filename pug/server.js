const express = require('express')
const { Router } = express
const fakeApi = require ('./src/container/fakeApi')
const routerProducts = Router()
const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/api/products', routerProducts)
app.use(express.static('public'))

const products = []
let napi = new fakeApi(products)

/* Methods */
routerProducts.get('/', (req, res) => {
    res.render('products', { products })
})

routerProducts.post('/', (req, res) => {
    napi.addProduct(req, res);
})

routerProducts.get('/:id', (req, res) => {
    napi.getProduct(req, res);
})

routerProducts.put('/:id', (req, res) => {
    napi.modifyProduct(req, res);
})

routerProducts.delete('/:id', (req, res) => {
    napi.deleteProduct(req, res);
})



/* Server */
const PORT = process.env.port || 8080

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${server.address().port}`)
})

server.on("error", error => console.log(`Error on server ${error}`))

