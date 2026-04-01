import express from 'express';
import { createPharma } from '../controllers/pharma.controller.js';

const route = express.Router();

route.post('/createpharma', createPharma);


export default route;