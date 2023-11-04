var mysql=require('mysql2');


var connection = mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_Gnoud28',
    password: 'U*Wm9nvf*h543Sg',
    database: 'freedb_ClosetStore_server',
    connectTimeout: 20000 
});


connection.connect(function(err) {
    if (err) {
        console.log("Kết nối MySQL không thành công: " + err.message);
    } else {
        console.log("Kết nối MySQL thành công!");
    }
});


module.exports=connection;