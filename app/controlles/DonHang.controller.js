var DonHang = require('../modals/DonHang.models')

exports.get_list=function(req,res){
    DonHang.get_all(function(data){
    res.send({result:data});
   });
   

}

exports.detail=function(req,res){
    DonHang.getByid(req.params.id,function(respnse){
        res.send({result:respnse});
    });
   
}

exports.remove_DonHang=function(req,res){
    var id=req.params.id;
    DonHang.remove(id,function(respnse){
        res.send({result:respnse});
    });
}
exports.update_DonHang=function(req,res){
    var data=req.body;
    DonHang.update(data,function (respnse){
        res.send({result:respnse});
    });
}

exports.add_DonHang = function (req, res) {
 var data = req.body;
 DonHang.create(data,function(respnse){
res.send({result:respnse});
 });
}

