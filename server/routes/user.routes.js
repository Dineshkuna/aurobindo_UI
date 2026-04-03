import express from 'express';
import { createNewUser, deleteUserProfile, login, updateUserProfile, allusers, singleuser,  } from '../controllers/auth.controllers.js';
import { roleRoute, userauth } from '../auth/tokenverifying.auth.js';


const route = express.Router();

route.post('/createnewuser', createNewUser)
route.post('/login', login)
route.put('/update/:id', updateUserProfile)
route.delete('/delete/:id',userauth,roleRoute(["admin"]), deleteUserProfile)
route.get("/allusers",userauth,roleRoute(["admin"]), allusers)
route.get("/user/:id",userauth,roleRoute(["admin"]), singleuser)

 
export default route;