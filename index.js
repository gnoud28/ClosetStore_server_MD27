var express =require('express');
var app=express();
// Cau hinh body-parser


var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


require('./app/routes/home.router')(app);
require('./app/routes/User.router')(app);
require('./app/routes/LoaiSanPham.router')(app);
require('./app/routes/NhanHang.router')(app);
require('./app/routes/SanPham.router')(app);
require('./app/routes/DonHang.router')(app);
require('./app/routes/Item.router')(app);
require('./app/routes/GioHang.router')(app);
app.listen(3000,function(){
    console.log("Server listen port http://localhost:3000");
});