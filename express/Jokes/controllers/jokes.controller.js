const Jokes = require(`../models/jokes.model`);

module.exports = {

    findAllJokes: (req, res)=>{
        Jokes.find({})
        .then((allJokes)=> {
            res.json(allJokes);
        })
        .catch((err)=>{
            console.log(err);
        })
    },

    findOneJokes: (req, res)=>{
        Jokes.findOne({_id: req.params.id})
        .then((oneJokes)=> {
            res.json(oneJokes);
        })
        .catch((err)=>{
            console.log(err);
        })
    },

    createNewJokes: (req, res)=>{
        Jokes.create(req.body)
        .then((newJokes)=> {
            res.json(newJokes);
        })
        .catch((err)=>{
            console.log(err);
        })
    },

    deleteJokes: (req, res)=>{
        Jokes.deleteOne({_id: req.params.id})
        .then((deleteJokes)=> {
            res.json(deleteJokes);
        })
        .catch((err)=>{
            console.log(err);
        })
    },

    updateJokes: (req, res)=>{
        Jokes.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true }
        )
            .then((updateJokes)=> {
                res.json(updateJokes);
        })
            .catch((err)=>{
                console.log(err);
        })
    }
}






