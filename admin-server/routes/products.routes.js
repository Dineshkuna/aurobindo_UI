import express from 'express';
import AdminProduct from '../models/AdminProduct.js';
import { verifyAdminToken } from '../middleware/auth.middleware.js';

const router = express.Router();

// Get all products (PUBLIC - for client frontend)
router.get('/public/all', async (req, res) => {
    try {
        const products = await AdminProduct.find().populate('createdBy', 'name email');
        res.status(200).json({
            success: true,
            data: products,
            total: products.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching products",
            error: error.message
        });
    }
});

// Get all products (AUTHENTICATED - for admin panel)
router.get('/', verifyAdminToken, async (req, res) => {
    try {
        const products = await AdminProduct.find().populate('createdBy', 'name email');
        res.status(200).json({
            success: true,
            data: products,
            total: products.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching products",
            error: error.message
        });
    }
});

// Create product
router.post('/', verifyAdminToken, async (req, res) => {
    try {
        const { productName, itemCode, strength, dosageForm, market, gtin, packInsertUrl } = req.body;

        if (!productName || !itemCode || !strength || !dosageForm || !market) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields"
            });
        }

        const product = new AdminProduct({
            productName,
            itemCode,
            strength,
            dosageForm,
            market,
            gtin,
            packInsertUrl,
            createdBy: req.user._id
        });

        await product.save();

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating product",
            error: error.message
        });
    }
});

// Update product
router.put('/:id', verifyAdminToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { productName, itemCode, strength, dosageForm, market, gtin, packInsertUrl } = req.body;

        const product = await AdminProduct.findByIdAndUpdate(
            id,
            { productName, itemCode, strength, dosageForm, market, gtin, packInsertUrl },
            { new: true, runValidators: true }
        );

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating product",
            error: error.message
        });
    }
});

// Delete product
router.delete('/:id', verifyAdminToken, async (req, res) => {
    try {
        const { id } = req.params;

        const product = await AdminProduct.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting product",
            error: error.message
        });
    }
});

export default router;
