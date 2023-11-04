module.exports=function(router){
    var NhanHangController=require('../controlles/NhanHang.controller');
    
    router.get("/nhanhang/list",NhanHangController.get_list);
    
    router.get("/nhanhang/detail/:id",NhanHangController.detail);
    router.post("/nhanhang/add",NhanHangController.add_NhanHang);
    router.delete("/nhanhang/delete/:id",NhanHangController.remove_NhanHang);
    router.put("/nhanhang/update",NhanHangController.update_NhanHang);
    
    };