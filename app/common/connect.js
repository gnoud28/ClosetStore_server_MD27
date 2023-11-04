var mysql=require('mysql2');


var connection = mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_duongnv',
    password: '#2zzN*z##%&NAZB',
    database: 'freedb_ClosetStore',
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