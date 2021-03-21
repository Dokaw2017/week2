'use strict';

const userModel = require('../models/userModel');

const {users} = userModel

const user_list_get = (req,res) => {
    res.send(users);
}

const user_get = (req,res)=>{
    const id = req.params.id
    const user = users.filter((user)=>user.id === id)
    res.send(user);
}

const user_create_post = (req,res)=>{
    console.log(req.body);
    res.send('from this end point you can post a user');
}

module.exports = {
    user_list_get,
    user_get,
    user_create_post
}