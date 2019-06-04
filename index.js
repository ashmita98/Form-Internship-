"use strict";
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const cors = require('cors');
const mongoose = require ('mongoose');
const  app  =  express();
const config= require('./db');
const detailsRoute = require('./routes/detailsRoute');

app.use(cors())

//middlewares
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use('/details',detailsRoute)

app.get('/getServerStatus', (req, res) => {
  res.status(200).send('This is a server');
});


app.post('/submitFormDetails', (req,res) => {
  console.log(req.body);
  if(req.body) {
    res.send('data received successfully');
  } else {
    res.send('error receiveing the data');
  }

});

mongoose.connect(config.DB).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database' +err)
});

// app.use(router);
const  port  =  process.env.PORT  ||  3000;
const  server  =  app.listen(port, () => {
  console.log('Server listening at http://localhost:'  +  port);
});


