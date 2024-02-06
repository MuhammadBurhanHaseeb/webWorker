const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory where your HTML, JS, and Worker files are located
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:3000`);
});
