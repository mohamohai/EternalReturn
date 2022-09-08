const express = require('express');
const app = express();

const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser')
sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
const {
    User,
    Sequelize: { Op }
  } = require('./models');
  sequelize.query('SET NAMES utf8;');
 

  const {
    Schedule,
    Sequelize: { Dp }
  } = require('./models');
  sequelize.query('SET NAMES utf8;');
  
app.post('/add/data', (req, res) => {
        User.create({
        account  : req.body.account,
        password : req.body.password,
        name     : req.body.name,
        image    : req.body.image,
        birthday : req.body.birthday,
        gender   : req.body.gender,
        job      : req.body.job
    })
    .then( result => {
        res.send(result)
    })
    .catch( err => {
        console.log(err)
        throw err;
    })
}) 

app.get('/get/data', (req, res) => {
    User.findAll()
    .then( result => { res.send(result) })
    .catch( err => { throw err })
}) 
app.get("/get/ScheduleId", (req, res) => {
    //씀 아이디를 이용하여 데이터 검색
  
    const { userId } = req.query;
    Schedule.findAll({
      where: {
        account: userId,
      },
      order: [["time", "ASC"]],
    })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        throw err;
      });
  });
app.post('/modify/data', (req, res) => {
    User.update({ name : req.body.modify.name }, {
        where : { id : req.body.modify.id }
    })
    .then( result => { res.send(result) })
    .catch( err => { throw err })
})
app.post('/delete/data', (req, res) => {
    User.destroy({
        where : { id : req.body.delete.id }
    })
    .then( res.sendStatus(200) )
    .catch( err => { throw err })
})


app.get('/get/Schedule', (req, res) => {
    Schedule.findAll()
    .then( result => { res.send(result) })
    .catch( err => { throw err })
}) 

app.post('/delete/Schedule', (req, res) => {
    Schedule.destroy({
        where : { id : req.body.delete.id }
    })
    .then( res.sendStatus(200) )
    .catch( err => { throw err })
})
app.get('/get/ScheduleS', (req, res) => {
    Schedule.findAll({
       
        
    })
   
    .then( result => { res.send(result) })
    .catch( err => { throw err })
})  
app.post('/add/Schedule', (req, res) => {console.log(req.body.title);console.log("왜요");
    Schedule.create({
    account     : req.body.account,
    title       : req.body.title,
    content     : req.body.content,
    location    : req.body.location,
    time        : req.body.time,
    etc         : req.body.etc
})


.then( result => {
    res.send(result)
})
.catch( err => {
    console.log(err)
    throw err;
})
}) 




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server On : ashttp://localhost:${PORT}/`);
    
})