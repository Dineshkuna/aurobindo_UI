import express from 'express';
import { createNewUser } from '../controllers/auth.controllers.js';


const route = express.Router();

route.post('/createnewuser', createNewUser)


export default route;