const express = require('express');
const app = express();
const path = require('node:path');
const assetPath = path.join(__dirname, 'public');
const appRouter = require('./routes/appRouter.js');
require('dotenv').config()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetPath));

const PORT = process.env.DEFAULT_PORT || 3000;

app.use(appRouter);

app.listen(PORT, () => {
    console.log('Server started...');
    console.log('Listening on port:', PORT);
})