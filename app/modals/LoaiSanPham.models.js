const db=require('../common/connect');

const LoaiSanPham = function (LoaiSanPham) {
    this.MaLoai = LoaiSanPham.MaLoai;
    this.TenLoai = LoaiSanPham.TenLoai;
    this.HinhanhLSP = LoaiSanPham.HinhanhLSP;
}
LoaiSanPham.get_all = function (result) {
    db.query("SELECT * FROM LoaiSanPham", function (err, LoaiSanPham) {
        if (err) {
            result(null);
        } else {
            result(LoaiSanPham);
        }
    });
}

LoaiSanPham.getByid = function (id, result) {
    db.query("SELECT * FROM LoaiSanPham WHERE MaLoai = ?", id, function (err, LoaiSanPham) {
        if (err || LoaiSanPham.length == 0) {
            result(null);
        } else {
            result(LoaiSanPham[0]);
        }
    });
}

LoaiSanPham.remove = function (id, result) {
    db.query("DELETE FROM LoaiSanPham WHERE MaLoai = ?", id, function (err, MaLoai) {
        if (err) {
            result(null);
        } else {
            result("XOA THANH CONG LoaiSanPham CO ID " + id);
        }
    });
}


LoaiSanPham.create=function(data,result){
   db.query("INSERT INTO LoaiSanPham SET ?", data,function(err,LoaiSanPham){
    if(err){
        result(null);
        }
        else{
            result({MaLoai: LoaiSanPham.insertId, ...data});
        }
   });
}
LoaiSanPham.update=function(array,result){
    db.query("UPDATE LoaiSanPham SET TenLoai=?, HinhanhLSP=? WHERE MaLoai=?", [array.TenLoai, array.HinhanhLSP, array.MaLoai], function (err, updateResult) {
        if(err){
            result(null);
            }
            else{
                result(array);
              
            }
       });
}
module.exports=LoaiSanPham;