import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';


dotenv.config();
const app = express();

const port = process.env.PORT || 8080;


app.use(cors({
    origin: ['http://localhost:3000/'],
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}));


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected");
        
    } catch (error) {
        console.log("DB connection error",error);
        
    }
}

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})