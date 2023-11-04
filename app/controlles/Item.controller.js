var Item = require('../modals/Item.models')

exports.get_list=function(req,res){
    Item.get_all(function(data){
    res.send({result:data});
   });
   

}

exports.detail=function(req,res){
    Item.getByid(req.params.id,function(respnse){
        res.send({result:respnse});
    });
   
}

exports.remove_Item=function(req,res){
    var id=req.params.id;
    Item.remove(id,function(respnse){
        res.send({result:respnse});
    });
}
exports.update_Item=function(req,res){
    var data=req.body;
    Item.update(data,function (respnse){
        res.send({result:respnse});
    });
}

exports.add_Item = function (req, res) {
 var data = req.body;
 Item.create(data,function(respnse){
res.send({result:respnse});
 });
}

