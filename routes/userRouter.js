const express = require ('express');
const User = require ('../models/userModel');
const data = require ('../data');
const expressAsyncHandler = require ('express-async-handler');
const bcrypt = require ('bcryptjs');
const  generateToken  = require ('../utils');

const userRouter= express.Router();

userRouter.get ('/seed', 
   expressAsyncHandler(async (req,res) => {
       // remove all older users
   //await User.remove({}) ;
    const createUsers = await User.insertMany(data.users);
    res.send ({createUsers});
}))

userRouter.post('/signin', expressAsyncHandler(async(req,res)=> {
    const user = await User.findOne({email: req.body.email});
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send ({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken (user),
            });
            return;
        }
    }
    res.status(401).send({message : 'Invalid Email or password'})
}))
module.exports=userRouter;