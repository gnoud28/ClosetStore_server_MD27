module.exports=function(router){
    var LoaiSanPhamController=require('../controlles/LoaiSanPham.controller');
    
    router.get("/LoaiSanPham/list",LoaiSanPhamController.get_list);
    
    router.get("/LoaiSanPham/detail/:id",LoaiSanPhamController.detail);
    router.post("/LoaiSanPham/add",LoaiSanPhamController.add_loaisanpham);
    router.delete("/LoaiSanPham/delete/:id",LoaiSanPhamController.remove_loaisanpham);
    router.put("/LoaiSanPham/update",LoaiSanPhamController.update_loaisanpham);
    
    };