const express = require('express');

if (process.env.NODE_ENV === 'dev') {
    const path = require('path');
    require('dotenv').config({path: path.join(__dirname, 'dev.env')});
}

const PORT = process.env.PORT;

if (!PORT) {
    throw new Error("Define server PORT in env");
}

const app = express();
app.get('/', (req, res) => {
    res.send(`Hello from app ID=${PORT}`);
});
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
