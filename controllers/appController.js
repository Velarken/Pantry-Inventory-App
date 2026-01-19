require('dotenv').config();

function showHome(req,res) {
    res.render('index', { pageTitle: 'Home Page' })
}
function inStockProducts(req,res) {
    res.render('products', { pageTitle: 'Products In Stock' })
}
function showLowStock(req,res) {
    res.render('lowStock', { pageTitle: 'Low Stock Products' })
}

module.exports = {
    showHome,
    inStockProducts,
    showLowStock
}