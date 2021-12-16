const Authors = require(`../models/authors.model`);

module.exports = {

    findAllAuthors: (req, res)=>{
        Authors.find({})
        .then((allAuthors)=> {
            res.json(allAuthors);
        })
        .catch((err)=>{
            console.log(err);
        })
    },

    findOneAuthors: (req, res)=>{
        
        Authors.findOne({_id: req.params.id})
        .then((oneAuthors)=> {
            res.json(oneAuthors);
        })
        .catch((err)=>{
            console.log(err);
        })
    },

    createNewAuthors: (req, res)=>{
        Authors.create(req.body)
        .then((newAuthors)=> {
            res.json(newAuthors);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json(err);
        })
    },

    deleteAuthors: (req, res)=>{
        Authors.deleteOne({_id: req.params.id})
        .then((deleteAuthors)=> {
            res.json(deleteAuthors);
        })
        .catch((err)=>{
            console.log(err);
        })
    },

    updateAuthors: (req, res)=>{
        Authors.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true }
        )
            .then((updateAuthors)=> {
                res.json(updateAuthors);
        })
            .catch((err)=>{
                console.log(err);
        })
    }

}