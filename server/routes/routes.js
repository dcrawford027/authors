const authorController = require('../controllers/author.controller');

module.exports = app => {
    app.post('/api/author', authorController.create),
    app.get('/api/author', authorController.getAll),
    app.get('/api/author/:id', authorController.getOne),
    app.patch('/api/author/:id', authorController.updateOne),
    app.delete('/api/author/:id', authorController.deleteOne)
}