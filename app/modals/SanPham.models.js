const db=require('../common/connect');

const SanPham = function (SanPham) {
    this.maSP = SanPham.maSP;
    this.TenSP = SanPham.TenSP;
    this.GiaSP = SanPham.GiaSP;
    this.HinhanhSP = SanPham.HinhanhSP;
    this.Mota = SanPham.Mota;
    this.MaLoai = SanPham.MaLoai;
    this.MaNH = SanPham.MaNH;
}
SanPham.get_all = function (result) {
    db.query("SELECT * FROM SanPham", function (err, SanPham) {
        if (err) {
            result(null);
        } else {
            result(SanPham);
        }
    });
}

SanPham.getByid = function (id, result) {
    db.query("SELECT * FROM SanPham WHERE maSP = ?", id, function (err, SanPham) {
        if (err || SanPham.length == 0) {
            result(null);
        } else {
            result(SanPham[0]);
        }
    });
}

SanPham.remove = function (id, result) {
    db.query("DELETE FROM SanPham WHERE maSP = ?", id, function (err, maSP) {
        if (err) {
            result(null);
        } else {
            result("XOA THANH CONG SanPham CO ID " + id);
        }
    });
}


SanPham.create=function(data,result){
   db.query("INSERT INTO SanPham SET ?", data,function(err,SanPham){
    if(err){
        result(null);
        }
        else{
            result({maSP: SanPham.insertId, ...data});
        }
   });
}
SanPham.update=function(array,result){
    db.query("UPDATE SanPham SET TenSP=?, GiaSP=?,HinhanhSP=?,Mota=?,MaLoai=?,MaNH=? WHERE maSP=?", [array.TenSP, array.GiaSP, array.HinhanhSP,array.Mota,array.MaLoai,array.MaNH,array.maSP], function (err, updateResult) {
        if(err){
            result(null);
            }
            else{
                result(array);
              
            }
       });
}
module.exports=SanPham;