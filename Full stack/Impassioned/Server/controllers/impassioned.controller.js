const Impassioned = require(`../models/impassioned.model`);
const jwt = require('jsonwebtoken');

module.exports = {

    findAllImpassioned: (req, res)=>{
        Impassioned.find({})
        .populate("createdBy", "username_id")
        .then((allImpassioned)=> {
            res.json(allImpassioned);
        })
        .catch((err)=>{
            console.log(err);
        })
    },

    findAllImpassionedByUser:(req, res)=>{
        Impassioned.find({ createdBy: req.params.userId})
        .then((allUserImpassioned)=> {
            console.log(allUserImpassioned);
            res.json(allUserImpassioned);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json(err);
        })

    },
    findAllImpassionedLikedByUser:(req, res)=>{
        Impassioned.find({ 
            _id: req.params.id,
            'likes.userId': req.params.userid                                            
        })
        .then((allUserImpassioned)=> {
            console.log(allUserImpassioned);
            res.json(allUserImpassioned);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json(err);
        })

    },

    findOneImpassioned: (req, res)=>{
        Impassioned.findOne({_id: req.params.id})
        .then((oneImpassioned)=> {
            res.json(oneImpassioned);
        })
        .catch((err)=>{
            console.log(err);
        })
    },

    createNewImpassioned: (req, res)=>{   
        
        console.log('///////////////////////////////');
        console.log(req.body);
        console.log('///////////////////////////////');        
        
        Impassioned.create(req.body)
        .then((newImpassioned)=> {
            res.json(newImpassioned);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json(err);
        })
    },

    deleteImpassioned: (req, res)=>{
        Impassioned.deleteOne({_id: req.params.id})
        .then((deleteImpassioned)=> {
            res.json(deleteImpassioned);
        })
        .catch((err)=>{
            console.log(err);
        })
    },

    updateImpassioned: (req, res)=>{
        Impassioned.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true }
        )
            .then((updateImpassioned)=> {
                res.json(updateImpassioned);
        })
            .catch((err)=>{
                console.log(err);
        })
    }

}