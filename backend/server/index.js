import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import pharmaroute from './routes/pharma.routes.js';
import userroute from './routes/user.routes.js';


dotenv.config();
const app = express();

const port = process.env.PORT || 8080;


app.use(cors({
    origin: ['http://localhost:3000/'],
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());


app.use("/pharma", pharmaroute);
app.use("/user", userroute);



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