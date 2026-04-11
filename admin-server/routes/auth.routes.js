import express from 'express';
import jwt from 'jsonwebtoken';
import AdminUser from '../models/AdminUser.js';
import { verifyAdminToken } from '../middleware/auth.middleware.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Admin Registration (only superadmin can create)
router.post('/register', verifyAdminToken, async (req, res) => {
    try {
        const { email, password, name, role } = req.body;

        // Only superadmin can register new admins
        if (req.user.role !== "superadmin") {
            return res.status(403).json({
                success: false,
                message: "Only superadmin can register new admins"
            });
        }

        // Check if admin already exists
        const existingAdmin = await AdminUser.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({
                success: false,
                message: "Admin already exists"
            });
        }

        // Create new admin
        const newAdmin = new AdminUser({
            email,
            password,
            name,
            role: role || 'admin'
        });

        await newAdmin.save();

        res.status(201).json({
            success: true,
            message: "Admin created successfully",
            data: {
                _id: newAdmin._id,
                email: newAdmin.email,
                name: newAdmin.name,
                role: newAdmin.role
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating admin",
            error: error.message
        });
    }
});

// Admin Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password required"
            });
        }

        const admin = await AdminUser.findOne({ email });

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        const isPasswordValid = await admin.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign({
            _id: admin._id,
            email: admin.email,
            name: admin.name,
            role: admin.role
        }, JWT_SECRET, { expiresIn: "24h" });

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            admin: {
                _id: admin._id,
                email: admin.email,
                name: admin.name,
                role: admin.role
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Login error",
            error: error.message
        });
    }
});

// Verify Token
router.get('/verify', verifyAdminToken, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Token valid",
        user: req.user
    });
});

// Logout (frontend clears token)
router.post('/logout', verifyAdminToken, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Logged out successfully"
    });
});

export default router;
