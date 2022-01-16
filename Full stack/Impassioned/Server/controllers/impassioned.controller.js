const Impassioned = require(`../models/impassioned.model`);
const jwt = require('jsonwebtoken');

module.exports = {

    findAllImpassioned: (req, res)=>{
        Impassioned.find({})
        .then((allImpassioned)=> {
            res.json(allImpassioned);
        })
        .catch((err)=>{
            console.log(err);
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

        const newImpassionedObj = new Impassioned(req.body);

        const decodedJWT = jwt.decode(req.cookie.usertoken,{
            complete: true
        })

        newImpassionedObj.createdBy = decodedJWT.payload.id;
        
        newImpassionedObj.save()
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