const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 36606

const db = require('./database/DatabaseInitializer');
db.DatabaseInitializer();
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/posterror', jsonParser, (req, res)=>{
    console.log('Got body:', req.body);
    res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})