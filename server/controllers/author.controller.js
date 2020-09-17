const Author = require('../models/author.model');

module.exports = {
    create: (req,res) => {
        Author.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    getAll: (req,res) => {
        Author.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    getOne: (req,res) => {
        Author.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    updateOne: (req,res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true, useFindAndModify: false })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    deleteOne: (req,res) => {
        Author.findOneAndDelete({ _id: req.params.id }, { useFindAndModify: false })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}