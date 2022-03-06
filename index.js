const express = require('express');
const app = express();

app.get('/api/days', (req,res) => {
    res.send('First route');
})

app.listen(3000, () => console.log('listening on port 3000'));