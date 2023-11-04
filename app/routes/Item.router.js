module.exports=function(router){
    var Itemcontroller=require('../controlles/Item.controller');
    
    router.get("/item/list",Itemcontroller.get_list);
    
    router.get("/item/detail/:id",Itemcontroller.detail);
    router.post("/item/add",Itemcontroller.add_Item);
    router.delete("/item/delete/:id",Itemcontroller.remove_Item);
    router.put("/item/update",Itemcontroller.update_Item);
    
    };