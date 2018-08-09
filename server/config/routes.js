var person = require('../controllers/tasks.js')

module.exports = function(app){
    app.get('/tasks',function(req,res){
        person.index(req,res)
    })
    
    app.post('/tasks',function(req,res){
        person.create(req,res)
    })

    app.get('/tasks/:id',function(req,res){
        person.taskID(req,res);
    })
    
    app.delete('/tasks/:id',function(req,res){
        person.remove(req,res);
    })

    app.put('/tasks/:id',function(req,res){
        person.update(req,res);
    })
}