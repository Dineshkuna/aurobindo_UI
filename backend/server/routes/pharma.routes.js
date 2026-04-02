import express from 'express';
import { createPharma, deletePharma, editPharma, getPharma, getSinglePharma } from '../controllers/pharma.controller.js';

const route = express.Router();

route.post('/createpharma', createPharma);
route.put('/editpharma/:id', editPharma);
route.delete('/deletepharma/:id', deletePharma);
route.get('/getPharma', getPharma);
route.get('/getSinglePharma/:id', getSinglePharma);



export default route;