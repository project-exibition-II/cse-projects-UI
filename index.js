const express = require('express');
const app = express();
const ejs = require('ejs');
const port = 3000;

app.set('view engine', 'ejs'); // This is to set the view engine as ejs

const ar = [["Akash", "CSE", 1], ["Dinesh", 'CSE', 2], ["Ganta Jagadeep", 'CSE', 1]];

app.get('/', (req, res) => {
     res.render('index.ejs', {
          students: ar
     })
})

app.get('/info', (req, res) => {
     res.send('<h1>This is the info page</h1>')
})

app.listen(port, () => {
     console.log(`Example app listening at http://localhost:${port}`)
})