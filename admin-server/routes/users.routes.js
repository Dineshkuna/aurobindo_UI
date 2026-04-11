import express from 'express';
import AdminUser from '../models/AdminUser.js';
import { verifyAdminToken } from '../middleware/auth.middleware.js';

const router = express.Router();

// Get all admins
router.get('/', verifyAdminToken, async (req, res) => {
    try {
        const admins = await AdminUser.find().select('-password');
        res.status(200).json({
            success: true,
            data: admins,
            total: admins.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching admins",
            error: error.message
        });
    }
});

// Get single admin
router.get('/:id', verifyAdminToken, async (req, res) => {
    try {
        const admin = await AdminUser.findById(req.params.id).select('-password');

        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Admin not found"
            });
        }

        res.status(200).json({
            success: true,
            data: admin
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching admin",
            error: error.message
        });
    }
});

// Update admin role (only superadmin)
router.put('/:id/role', verifyAdminToken, async (req, res) => {
    try {
        if (req.user.role !== "superadmin") {
            return res.status(403).json({
                success: false,
                message: "Only superadmin can update roles"
            });
        }

        const { role } = req.body;

        if (!['admin', 'superadmin'].includes(role)) {
            return res.status(400).json({
                success: false,
                message: "Invalid role"
            });
        }

        const admin = await AdminUser.findByIdAndUpdate(
            req.params.id,
            { role },
            { new: true }
        ).select('-password');

        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Admin not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Role updated successfully",
            data: admin
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating role",
            error: error.message
        });
    }
});

// Delete admin (only superadmin)
router.delete('/:id', verifyAdminToken, async (req, res) => {
    try {
        if (req.user.role !== "superadmin") {
            return res.status(403).json({
                success: false,
                message: "Only superadmin can delete admins"
            });
        }

        const admin = await AdminUser.findByIdAndDelete(req.params.id);

        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Admin not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Admin deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting admin",
            error: error.message
        });
    }
});

export default router;
