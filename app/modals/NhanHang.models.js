const db=require('../common/connect');

const NhanHang = function (NhanHang) {
    this.MaNH = NhanHang.MaNH;
    this.TenNH = NhanHang.TenNH;
    this.ThongtinNH = NhanHang.ThongtinNH;
}
NhanHang.get_all = function (result) {
    db.query("SELECT * FROM NhanHang", function (err, NhanHang) {
        if (err) {
            result(null);
        } else {
            result(NhanHang);
        }
    });
}

NhanHang.getByid = function (id, result) {
    db.query("SELECT * FROM NhanHang WHERE MaNH = ?", id, function (err, NhanHang) {
        if (err || NhanHang.length == 0) {
            result(null);
        } else {
            result(NhanHang[0]);
        }
    });
}

NhanHang.remove = function (id, result) {
    db.query("DELETE FROM NhanHang WHERE MaNH = ?", id, function (err, MaNH) {
        if (err) {
            result(null);
        } else {
            result("XOA THANH CONG Nhãn Hàng CO ID " + id);
        }
    });
}


NhanHang.create=function(data,result){
   db.query("INSERT INTO NhanHang SET ?", data,function(err,NhanHang){
    if(err){
        result(null);
        }
        else{
            result({MaNH: NhanHang.insertId, ...data});
        }
   });
}
NhanHang.update=function(array,result){
    db.query("UPDATE NhanHang SET TenNH=?,ThongtinNH=? WHERE MaNH=?", [array.MaNH,array.TenNH,array.ThongtinNH],function(err,updatereutl){
        if(err){
            result(null);
            }
            else{
                result(array);
              
            }
       });
}
module.exports=NhanHang;