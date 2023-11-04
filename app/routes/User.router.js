module.exports=function(router){
var UsersController=require('../controlles/User.controller');

router.get("/users/list",UsersController.get_list);

router.get("/users/detail/:id",UsersController.detail);
router.post("/users/add",UsersController.add_Users);
router.delete("/users/delete/:id",UsersController.remove_Users);
router.put("/users/update",UsersController.update_Users);

};