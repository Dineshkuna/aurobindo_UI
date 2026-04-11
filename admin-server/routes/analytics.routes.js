import express from 'express';
import AdminProduct from '../models/AdminProduct.js';
import AdminUser from '../models/AdminUser.js';
import { verifyAdminToken } from '../middleware/auth.middleware.js';

const router = express.Router();

// Get dashboard stats
router.get('/dashboard', verifyAdminToken, async (req, res) => {
    try {
        const totalProducts = await AdminProduct.countDocuments();
        const totalAdmins = await AdminUser.countDocuments();
        const superAdmins = await AdminUser.countDocuments({ role: 'superadmin' });
        const regularAdmins = await AdminUser.countDocuments({ role: 'admin' });

        const recentProducts = await AdminProduct.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .populate('createdBy', 'name email');

        const recentAdmins = await AdminUser.find()
            .select('-password')
            .sort({ createdAt: -1 })
            .limit(5);

        res.status(200).json({
            success: true,
            data: {
                totalProducts,
                totalAdmins,
                superAdmins,
                regularAdmins,
                recentProducts,
                recentAdmins
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching dashboard stats",
            error: error.message
        });
    }
});

// Get detailed analytics
router.get('/detailed', verifyAdminToken, async (req, res) => {
    try {
        const totalProducts = await AdminProduct.countDocuments();
        const totalAdmins = await AdminUser.countDocuments();
        const superAdmins = await AdminUser.countDocuments({ role: 'superadmin' });
        const regularAdmins = await AdminUser.countDocuments({ role: 'admin' });

        const productsByMarket = await AdminProduct.aggregate([
            {
                $group: {
                    _id: '$market',
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } }
        ]);

        const productsByForm = await AdminProduct.aggregate([
            {
                $group: {
                    _id: '$dosageForm',
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } }
        ]);

        const productsByStrength = await AdminProduct.aggregate([
            {
                $group: {
                    _id: '$strength',
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } },
            { $limit: 10 }
        ]);

        res.status(200).json({
            success: true,
            data: {
                totalProducts,
                totalAdmins,
                superAdmins,
                regularAdmins,
                productsByMarket,
                productsByForm,
                productsByStrength
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching analytics",
            error: error.message
        });
    }
});

// Export report endpoint (ready for implementation)
router.get('/report/csv', verifyAdminToken, async (req, res) => {
    try {
        const products = await AdminProduct.find();
        // TODO: Implement CSV export logic
        res.status(200).json({
            success: true,
            message: "CSV export will be generated",
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error generating report",
            error: error.message
        });
    }
});

export default router;
