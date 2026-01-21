const db = require('../db/queries');
const { Client } = require('pg');
require('dotenv').config();

function showHome(req,res) {
    res.render('index', { pageTitle: 'Home Page' })
}
async function inStockProducts(req,res) {
    const products = await db.showInStockProducts();
    res.render('products', { pageTitle: 'Products In Stock', products })
}
async function showLowStock(req,res) {
    const products = await db.showOutOfStockProducts();
    res.render('lowStock', { pageTitle: 'Low Stock Products', products })
}

module.exports = {
    showHome,
    inStockProducts,
    showLowStock
}