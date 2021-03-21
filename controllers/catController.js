'use strict';
// catController
const catModel = require('../models/catModel');

const {cats} = catModel

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req,res)=>{
  const id = req.params.id
  const cat = cats.filter((cat)=>cat.id === id).pop();
  res.send(cat)
}

const cat_create_post = (req,res)=>{
  console.log('text body',req.body);
  console.log('text file',req.file);
  res.send('new cats can be added through this route');
}

module.exports = {
  cat_list_get,
  cat_get,
  cat_create_post
};
