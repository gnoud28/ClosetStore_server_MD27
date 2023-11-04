const db=require('../common/connect');

const DonHang = function (DonHang) {
    this.MaDH = DonHang.MaDH;
    this.maND = DonHang.maND;
    this.tenND = DonHang.tenND;
    this.DiaChi = DonHang.DiaChi;
    this.Sdt = DonHang.Sdt;
    this.Email = DonHang.Email;
    this.SoLuong = DonHang.SoLuong;
    this.TongTien = DonHang.TongTien;
    this.TrangThai = DonHang.TrangThai;
    this.NgayTao = DonHang.NgayTao;
    
}
DonHang.get_all = function (result) {
    db.query("SELECT * FROM DonHang", function (err, DonHang) {
        if (err) {
            result(null);
        } else {
            result(DonHang);
        }
    });
}

DonHang.getByid = function (id, result) {
    db.query("SELECT * FROM DonHang WHERE MaDH = ?", id, function (err, DonHang) {
        if (err || DonHang.length == 0) {
            result(null);
        } else {
            result(DonHang[0]);
        }
    });
}

DonHang.remove = function (id, result) {
    db.query("DELETE FROM DonHang WHERE MaDH = ?", id, function (err, MaDH) {
        if (err) {
            result(null);
        } else {
            result("XOA THANH CONG DonHang CO ID " + id);
        }
    });
}


DonHang.create=function(data,result){
   db.query("INSERT INTO DonHang SET ?", data,function(err,DonHang){
    if(err){
        result(null);
        }
        else{
            result({MaDH: DonHang.insertId, ...data});
        }
   });
}

DonHang.update = function(array, result) {
    db.query("UPDATE DonHang SET maND=?, DiaChi=?, Sdt=?, Email=?, SoLuong=?, tenND=?, TongTien=?, TrangThai=?, NgayTao=? WHERE MaDH=?", [array.maND, array.DiaChi, array.Sdt, array.Email, array.SoLuong, array.tenND, array.TongTien, array.TrangThai, array.NgayTao, array.MaDH], function (err, updateResult) {
        if (err) {
            result(err);
        } else {
            result(array);
        }
    });
}
module.exports=DonHang;