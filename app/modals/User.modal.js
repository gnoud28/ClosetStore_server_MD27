const db=require('../common/connect');

const Users = function (Users) {
    this.maND = Users.maND;
    this.tenND = Users.tenND;
    this.MatkhauND = Users.MatkhauND;
    this.Sdtnd = Users.Sdtnd;
    this.Email = Users.Email;
}
Users.get_all = function (result) {
    db.query("SELECT * FROM Users", function (err, Users) {
        if (err) {
            result(null);
        } else {
            result(Users);
        }
    });
}

Users.getByid = function (id, result) {
    db.query("SELECT * FROM Users WHERE maND = ?", id, function (err, Users) {
        if (err || Users.length == 0) {
            result(null);
        } else {
            result(Users[0]);
        }
    });
}

Users.remove = function (id, result) {
    db.query("DELETE FROM Users WHERE maND = ?", id, function (err, maND) {
        if (err) {
            result(null);
        } else {
            result("XOA THANH CONG User CO ID " + id);
        }
    });
}


Users.create=function(data,result){
   db.query("INSERT INTO Users SET ?", data,function(err,Users){
    if(err){
        result(null);
        }
        else{
            result({maND: Users.insertId, ...data});
        }
   });
}
Users.update=function(array,result){
    db.query("UPDATE Users SET tenND=?,MatkhauND=?,Email=?,Sdtnd=? WHERE maND=?", [array.tenND,array.MatkhauND,array.Email,array.Sdtnd,array.maND],function(err,updatereutl){
        if(err){
            result(null);
            }
            else{
                result(array);
              
            }
       });
}
module.exports=Users;