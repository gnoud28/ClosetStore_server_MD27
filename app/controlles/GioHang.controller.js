var GioHang = require('../modals/GioHang.models')

exports.get_list=function(req,res){
    GioHang.get_all(function(data){
    res.send({result:data});
   });
   

}

exports.detail=function(req,res){
    GioHang.getByid(req.params.id,function(respnse){
        res.send({result:respnse});
    });
   
}

exports.remove_GioHang=function(req,res){
    var id=req.params.id;
    GioHang.remove(id,function(respnse){
        res.send({result:respnse});
    });
}
exports.update_GioHang=function(req,res){
    var data=req.body;
    GioHang.update(data,function (respnse){
        res.send({result:respnse});
    });
}

exports.add_GioHang = function (req, res) {
 var data = req.body;
 GioHang.create(data,function(respnse){
res.send({result:respnse});
 });
}

