// here we are importing express pakage
const express = require('express');
// Hear we are creating our Application using Express Constrctor
const app = express();

//this is the port for server connection
const PORT = 7000;

app.get('/', function (req, res) {
    res.send('This the response Text')
});

//this is Server connect method with HOST and PORT 
const SERVER = app.listen(PORT, () => {
    const HOST = SERVER.address().address
    console.log(`Backend Server is Connected at http://${HOST}:${PORT}`);
});
