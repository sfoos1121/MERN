const User = require(`../models/user.model`);
const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);
require('dotenv').config();

module.exports = {

    register: (req, res)=>{
        console.log('In register')
        console.log(req.body);

        const user = new User(req.body);

        user.save()
            .then((newUser)=> {
                console.log(newUser);
                res.json({
                    successfulMessage: 'Thank you for registering',
                    user: newUser
                })
            })
            .catch((err)=>{
                console.log('Registration unsuccessful');
                console.log('err');
                res.status(400).json(err);
            })
    },

    login: (req, res)=>{                          
        User.findOne({email: req.body.email})
            .then((userRecord)=> {                  
                if(userRecord === null) {
                    // email not found in users collection
                    res.status(400).json({message:'Invalid Login Attempt!'});
                }
                else{
                    bcrypt.compare(req.body.password, userRecord.password)
                        .then((IsPasswordValid)=> {
                            if(IsPasswordValid) {
                                console.log('password is valid');

                                res.cookie(
                                    'usertoken',
                                    jwt.sign(
                                        {
                                            id: userRecord._id,
                                            email: userRecord.email,
                                            username: userRecord.username
                                        },
                                        process.env.JWT_SECRET
                                    ),
                                    {
                                        httpOnly: true,
                                        expires: new Date (Date.now() + 9000000)
                                    },
                                ).json({
                                    message: 'Login successful',
                                    userLoggedIn: userRecord.username,
                                    userId: userRecord._id
                                })
                            }
                            else {
                                res.status(400).json({
                                    message: 'Login and/or email Invalid!'
                                })
                            }
                        })
                        .catch((err)=>{
                            console.log('err');
                            res.status(400).json({
                                message: 'Invalid attempt!'
                            })
                        });
                }
            })
            .catch((err)=>{
                console.log('err');
                res.status(400).json({
                    message: 'Invalid attempt!'})
                })
    },

    logout: (req, res)=>{
        console.log('loggin out');
        res.clearCookie('usertoken');
        res.json({
            message: 'You have successfully logged out'
        })
    },

    getOneUser: (req, res)=>{
        User.findOne({_id: req.params.id})
        .then((oneUser)=> {
            console.log(oneUser);
            res.json(oneUser);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json(err);
        });
    },
};

            