const pool = require('./pool');

async function getAllProducts() {
    const client = await pool.connect();
    try {
        const { rows } = await client.query(`SELECT * FROM food_inventory;`);
        return rows;
    } catch (error) {
        console.log(error)
    } finally {
        client.release();
    }
}
async function showInStockProducts() {
    const client = await pool.connect();
    try {
        const { rows } = await client.query(`SELECT food_name, price, category FROM food_inventory WHERE current_stock > 0`)
        return rows;
    } catch (error) {
        console.log(error)
    } finally {
        client.release();
    }
};
async function showOutOfStockProducts() {
    const client = await pool.connect();
    try {
        const { rows } = await client.query(`SELECT food_name, price, category FROM food_inventory WHERE current_stock = 0`)
        return rows;
    } catch (error) {
        console.log(error)
    } finally {
        client.release();
    }
}

module.exports = {
    getAllProducts,
    showInStockProducts,
    showOutOfStockProducts
}