var NhanHang = require('../modals/NhanHang.models')


exports.get_list=function(req,res){
    NhanHang.get_all(function(data){
    res.send({result:data});
   });

}

exports.detail=function(req,res){
    NhanHang.getByid(req.params.id,function(respnse){
        res.send({result:respnse});
    });
   
}

exports.remove_NhanHang=function(req,res){
    var id=req.params.id;
    NhanHang.remove(id,function(respnse){
        res.send({result:respnse});
    });
}
exports.update_NhanHang=function(req,res){
    var data=req.body;
    NhanHang.update(data,function (respnse){
        res.send({result:respnse});
    });
}

exports.add_NhanHang = function (req, res) {
    var data = req.body;
 NhanHang.create(data,function(respnse){
res.send({result:respnse});
 });
}

