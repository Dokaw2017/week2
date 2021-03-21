'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('./utils/pass');
const authRoute = require('./routes/authRoute');

const port = 3000;

const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');

app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use(express.static('week2_public_html'));

app.use("/cat",passport.authenticate('jwt', {session: false}),catRoute);
app.use('/user', passport.authenticate('jwt', {session: false}),userRoute);
app.use('/auth',authRoute);

app.post('/addcat',(req,res)=>{
  res.send('With this endpoint you can add cats');
})

app.put('/editcat',(req,res)=>{
  res.send('With this endpoint you can edit cats');
})

app.delete('/deletecats',(req,res)=>{
  res.send('With this endpoint you can delete cats');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
