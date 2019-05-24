const products = require('../products.json')


const getProducts = (req, res) => {

    if(req.query.price){
        const items = products.filter(val => val.price >= parseInt(req.query.price))
        return res.status(200).send(items)
    }
        res.status(200).send(products)
}



// function getUserByEmail(req, res) {
//     let {email} = req.query
//     let user = users.find(user => user.email === email)
//     res.send(user)
//   }

module.exports = getProducts
    

    