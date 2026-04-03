import express from 'express';
import { createPharma, deletePharma, editPharma, getPharma, getSinglePharma } from '../controllers/pharma.controller.js';
import { userauth } from '../auth/tokenverifying.auth.js';

const route = express.Router();

route.post('/createpharma',userauth, createPharma);
route.put('/editpharma/:id',userauth, editPharma);
route.delete('/deletepharma/:id',userauth, deletePharma);
route.get('/getPharma', getPharma);
route.get('/getSinglePharma/:id', getSinglePharma);


  
export default route;