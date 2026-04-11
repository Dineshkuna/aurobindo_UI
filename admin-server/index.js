import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/products.routes.js';
import userRoutes from './routes/users.routes.js';
import analyticsRoutes from './routes/analytics.routes.js';

dotenv.config();
const app = express();

const port = process.env.ADMIN_PORT || 8081;

// CORS Configuration
app.use(cors({
    origin: ['http://localhost:3031', 'http://localhost:3000', 'http://localhost:8081'],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/analytics", analyticsRoutes);

// Health Check
app.get("/", (req, res) => {
    res.json({ message: "Admin Server Running", status: "active" });
});

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Admin DB connected");
    } catch (error) {
        console.log("❌ DB connection error", error);
    }
};

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`🚀 Admin Server running on port ${port}`);
    });
});
