const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const User = require('./models/user')
mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox-s5rkh.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we are connected")
});

router.get('/',(req,res)=>{
    res.send('from API Route')
})

router.post('/register',(req,res)=>{
  let userData = req.body
  let user = new User(userData)
  user.save((error, registeredUser)=>{
    if(error){
      console.log(error)
    }else{
      res.status(200).send(registeredUser)
    }
  })

})

router.post('/login',(req,res)=>{
  let userData = req.body
  User.findOne({email: userData.email},(error,user)=>{
    if(error){
      console.log(error)
    }else {
      if(!user) {
        res.status(401).send('Invalid Email')
      }else{
        if(user.password !==userData.password){
          res.status(401).send('Invalid password')
        }
        else {
           res.status(200).send(user)
        }
      }
    }
  })
})

router.get('/events', (req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(events)
})
router.get('/special', (req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(events)
})

module.exports = router