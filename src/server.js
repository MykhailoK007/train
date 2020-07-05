const express = require('express');
const app = express();
const cors = require('cors');

const port = 3000;

app.use(cors())

app.get('/', (req,res) => {
    res.status(200)
    res.json({message: 'cool data🐴asd😇'})
})
app.listen(port,() => {
    console.log(`Server start on port ${port}`);
})

