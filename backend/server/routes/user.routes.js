import express from 'express';
import { createNewUser, login } from '../controllers/auth.controllers.js';


const route = express.Router();

route.post('/createnewuser', createNewUser)
route.post('/login', login)


export default route;