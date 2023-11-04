module.exports=function(router){
    var SanPhamcontroller=require('../controlles/SanPham.controller');
    
    router.get("/Sanpham/list",SanPhamcontroller.get_list);
    
    router.get("/Sanpham/detail/:id",SanPhamcontroller.detail);
    router.post("/Sanpham/add",SanPhamcontroller.add_SanPham);
    router.delete("/Sanpham/delete/:id",SanPhamcontroller.remove_SanPham);
    router.put("/Sanpham/update",SanPhamcontroller.update_SanPham);
    
    };