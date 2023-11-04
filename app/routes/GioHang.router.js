module.exports=function(router){
    var GioHangcontroller=require('../controlles/GioHang.controller');
    
    router.get("/GioHang/list",GioHangcontroller.get_list);
    
    router.get("/GioHang/detail/:id",GioHangcontroller.detail);
    router.post("/GioHang/add",GioHangcontroller.add_GioHang);
    router.delete("/GioHang/delete/:id",GioHangcontroller.remove_GioHang);
    router.put("/GioHang/update",GioHangcontroller.update_GioHang);
    
    };