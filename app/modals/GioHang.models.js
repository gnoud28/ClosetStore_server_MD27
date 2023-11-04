const db=require('../common/connect');

const GioHang = function (GioHang) {
    this.MaSPGH = GioHang.MaSPGH;
    this.TenSPGH = GioHang.TenSPGH;
    this.GiaSPGH = GioHang.GiaSPGH;
    this.HinhanhSPGH = GioHang.HinhanhSPGH;
    this.SoLuongSPGH = GioHang.SoLuongSPGH;
}
GioHang.get_all = function (result) {
    db.query("SELECT * FROM GioHang", function (err, GioHang) {
        if (err) {
            result(null);
        } else {
            result(GioHang);
        }
    });
}

GioHang.getByid = function (id, result) {
    db.query("SELECT * FROM GioHang WHERE MaSPGH = ?", id, function (err, GioHang) {
        if (err || GioHang.length == 0) {
            result(null);
        } else {
            result(GioHang[0]);
        }
    });
}

GioHang.remove = function (id, result) {
    db.query("DELETE FROM GioHang WHERE MaSPGH = ?", id, function (err, MaSPGH) {
        if (err) {
            result(null);
        } else {
            result("XOA THANH CONG GioHang CO ID " + id);
        }
    });
}


GioHang.create=function(data,result){
   db.query("INSERT INTO GioHang SET ?", data,function(err,GioHang){
    if(err){
        result(null);
        }
        else{
            result({MaSPGH: GioHang.insertId, ...data});
        }
   });
}
GioHang.update=function(array,result){
    db.query("UPDATE GioHang SET TenSPGH=?, GiaSPGH=?,HinhanhSPGH=?,SoLuongSPGH=? WHERE MaSPGH=?", [array.TenSPGH, array.GiaSPGH, array.HinhanhSPGH, array.SoLuongSPGH, array.MaSPGH], function (err, updateResult) {
        if(err){
            result(null);
            }
            else{
                result(array);
              
            }
       });
}
module.exports=GioHang;