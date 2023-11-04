module.exports=function(router){
    var DonHangcontroller=require('../controlles/DonHang.controller');
    
    router.get("/DonHang/list",DonHangcontroller.get_list);
    
    router.get("/DonHang/detail/:id",DonHangcontroller.detail);
    router.post("/DonHang/add",DonHangcontroller.add_DonHang);
    router.delete("/DonHang/delete/:id",DonHangcontroller.remove_DonHang);
    router.put("/DonHang/update",DonHangcontroller.update_DonHang);
    
    };