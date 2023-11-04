const db=require('../common/connect');

const Item = function (Item) {
    this.MaCTSP = Item.MaCTSP;
    this.TenSP = Item.TenSP;
    this.SoLuong = Item.SoLuong;
    this.HinhANhITEM = Item.HinhANhITEM;
}
Item.get_all = function (result) {
    db.query("SELECT * FROM Item", function (err, Item) {
        if (err) {
            result(null);
        } else {
            result(Item);
        }
    });
}

Item.getByid = function (id, result) {
    db.query("SELECT * FROM Item WHERE MaCTSP = ?", id, function (err, Item) {
        if (err || Item.length == 0) {
            result(null);
        } else {
            result(Item[0]);
        }
    });
}

Item.remove = function (id, result) {
    db.query("DELETE FROM Item WHERE MaCTSP = ?", id, function (err, MaCTSP) {
        if (err) {
            result(null);
        } else {
            result("XOA THANH CONG Item CO ID " + id);
        }
    });
}


Item.create=function(data,result){
   db.query("INSERT INTO Item SET ?", data,function(err,Item){
    if(err){
        result(null);
        }
        else{
            result({MaCTSP: Item.insertId, ...data});
        }
   });
}
Item.update=function(array,result){
    db.query("UPDATE Item SET TenSP=?, SoLuong=?,HinhANhITEM=? WHERE MaCTSP=?", [array.TenSP, array.SoLuong,array.HinhANhITEM, array.MaCTSP], function (err, updateResult) {
        if(err){
            result(null);
            }
            else{
                result(array);
              
            }
       });
}
module.exports=Item;