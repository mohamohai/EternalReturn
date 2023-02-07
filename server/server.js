const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');
const mysql = require('mysql');
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/User', (req, res) => {
  sql = `select * from User`;

  db.query(sql, (err, data) => {
      if(!err) 
        res.send({ data : data }); //앞에가 내가 쓸 변수
      else 
        res.send(err);
  })
})

app.get('/api/Notice', (req, res) => {
  sql = `select * from Notice`;

  db.query(sql, (err, data) => {
      if(!err) 
        res.send({ data : data });
      else 
        res.send(err);
  })
})
app.post('/api/NoticeInsert', (req, res) => {

  console.log(post_user_id,post_password,post_title,post_content)

  //파라미터를 받아오는 부분
      let post_user_id = req.body.params.post_user_id;
      let post_password = req.body.params.post_password;
      let post_title = req.body.params.post_title;
      let post_content = req.body.params.post_content;
      let values = [post_user_id, post_password,post_title, post_content]

  //SQL 코드
      const sql = "INSERT INTO Notice(Id, Content, Title, Password) VALUES(?, ?, ? ,?)"
      db.query(sql,values,
          (err, result) => {
              if (err)
                  console.log(err);
              else
                  res.send(result);
          });
  });




app.listen(PORT, () => {
  console.log(`Server dOn : http://localhost:${PORT}/`);
});