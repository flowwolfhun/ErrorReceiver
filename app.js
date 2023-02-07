const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 36606

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/posterror', (req, res)=>{
    console.log('Got body:', req.body);
    res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})