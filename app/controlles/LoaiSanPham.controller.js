var LoaiSanPham = require('../modals/LoaiSanPham.models')

exports.get_list=function(req,res){
    LoaiSanPham.get_all(function(data){
    res.send({result:data});
   });

}

exports.detail=function(req,res){
    LoaiSanPham.getByid(req.params.id,function(respnse){
        res.send({result:respnse});
    });
   
}

exports.remove_loaisanpham=function(req,res){
    var id=req.params.id;
    LoaiSanPham.remove(id,function(respnse){
        res.send({result:respnse});
    });
}
exports.update_loaisanpham=function(req,res){
    var data=req.body;
    LoaiSanPham.update(data,function (respnse){
        res.send({result:respnse});
    });
}

exports.add_loaisanpham = function (req, res) {
 var data = req.body;
 LoaiSanPham.create(data,function(respnse){
res.send({result:respnse});
 });
}

