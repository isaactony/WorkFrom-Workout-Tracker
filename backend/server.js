const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log(req.path, req.method);
})

app.get('/', (req, res) => {
    res.json({message: "hello developer welcome on board"})
})


app.listen(PORT, () => {
    console.log('listening on port 300');
})