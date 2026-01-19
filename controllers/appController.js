require('dotenv').config();

function showHome(req,res) {
    res.render('index', {pageTitle: 'Home Page'})
}
module.exports = {
    showHome,
}