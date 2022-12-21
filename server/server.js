const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/User', (req, res) => {
  sql = `select * from User`;

  db.query(sql, (err, data) => {
      if(!err) res.send({ products : data });
      else res.send(err);
  })
})



app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});