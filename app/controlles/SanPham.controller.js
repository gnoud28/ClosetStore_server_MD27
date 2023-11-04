var SanPham = require('../modals/SanPham.models')

exports.get_list=function(req,res){
    SanPham.get_all(function(data){
    res.send({result:data});
   });
   

}

exports.detail=function(req,res){
    SanPham.getByid(req.params.id,function(respnse){
        res.send({result:respnse});
    });
   
}

exports.remove_SanPham=function(req,res){
    var id=req.params.id;
    SanPham.remove(id,function(respnse){
        res.send({result:respnse});
    });
}
exports.update_SanPham=function(req,res){
    var data=req.body;
    SanPham.update(data,function (respnse){
        res.send({result:respnse});
    });
}

exports.add_SanPham = function (req, res) {
 var data = req.body;
 SanPham.create(data,function(respnse){
res.send({result:respnse});
 });
}

