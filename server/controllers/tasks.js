Task = require('../models/task.js')

module.exports = {
    index:function(req,res){
        Task.find({},function(err,tasks){
            if(err){
                console.log(err)
                res.json({message: "Error", error: err})
            }
            else{
                res.json({message: "Success",tasks:tasks})
            }
        })
    },
    create:function(req,res){
        Task.create(req.body,function(err, task){
            if(err){
                console.log(err)
                res.json({message: "Error", error: err})
            }
            else{
                res.json({message: "Success",task:task})
            }
        })
    },
    taskID:function(req,res){
        Task.find({_id:req.params.id},function(err,task){
            if(err){
                console.log(err)
                res.json({message: "Error", error: err})
            }
            else{
                res.json({message: "Success",task:task})
            }
        })
    },
    remove:function(req,res){
        Task.remove({_id:req.params.id},function(err,task){
            if(err){
                console.log(err)
                res.json({message: "Error", error: err})
            }
            else{
                res.json({message: "Removed",task:task})
            }
        })
    },
    update:function(req,res){
        Task.update({_id:req.params.id},req.body,function(err,task){
            if(err){
                console.log(err)
                res.json({message: "Error", error: err})
            }
            else{
                res.json({message: "Success",task:task})
            }
        })
    }
}