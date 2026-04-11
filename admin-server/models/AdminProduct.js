import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    itemCode: {
        type: String,
        required: true,
        unique: true
    },
    strength: {
        type: String,
        required: true
    },
    dosageForm: {
        type: String,
        required: true
    },
    market: {
        type: String,
        required: true
    },
    gtin: {
        type: String,
        default: ""
    },
    packInsertUrl: {
        type: String,
        default: ""
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AdminUser'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

export default mongoose.model("AdminProduct", productSchema);
