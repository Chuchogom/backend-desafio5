const { Router } = require('express') // si exportamos el router va el require, sino {Router} = express
const routerProducts = Router() // 1° --> declaro router
const fakeApi = require ('../container/fakeApi') 

const products = []
let api = new fakeApi(products)

routerProducts.get('/', (req, res) => {
    res.render('products', { products })
})

routerProducts.post('/', (req, res) => {
    api.addProduct(req, res);
})

routerProducts.get('/:id', (req, res) => {
    api.getProduct(req, res);
})

routerProducts.put('/:id', (req, res) => {
    api.updateProduct(req, res);
})

routerProducts.delete('/:id', (req, res) => {
    api.deleteProduct(req, res);
})

module.exports = routerProducts