const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Jaspreet_kumar:jassi@123@cluster0.1tlhr.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const PORT = 3000
const api = require('./routes/api')
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/api' ,api)

app.get('/', function(req,res){
   res.send('Hello from server')
})

app.listen(PORT, function(){
    console.log("server running on localhost:"+ PORT)
})