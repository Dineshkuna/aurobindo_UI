import Pharma from "../models/pharma.model.js";
import User from '../models/user.model.js';


export const createPharma = async (req, res, next) => {

    const { productName, itemCode, strength, gtin, market, dosageForm } = req.body;
    const userId = req.userId;
    const user = await User.findById(userId);
    
    try {
        let pharma = new Pharma({
            productName,
            itemCode,
            strength,
            gtin,
            market,
            dosageForm,
            user : {id: userId, name: user.name}
        });

        await pharma.save();

        res.status(200).json({success: true, message: "Pharma created successfully",})
    }catch (error) {
        res.status(500).json({success : false, message: "Failed to create pharma", error: error.message})

    }
    


}

export const editPharma = async (req, res, next) => {
    
    const pharmaId = req.params.id;
    try {
        const pharma = await Pharma.findById(pharmaId);

        if (!pharma){
            return res.status(404).json({success : false, message: "Not found"})
        }
        const update  = await Pharma.findByIdAndUpdate(pharmaId, {$set: req.body}, { new: true });

        res.status(200).json({success: true, message: "Pharma updated successfully", data: update})
    } catch (error) {
        res.status(500).json({success : false, message: "Failed to update pharma", error: error.message})
    }
    
}

export const deletePharma = async(req, res, next) => {
    const pharmaId = req.params.id;

    try {
        const pharma = await Pharma.findById(pharmaId);

        if (!pharma){
            return res.status(404).json({success : false, message: "Not found"})
        }
        await Pharma.findByIdAndDelete(pharmaId);

        res.status(200).json({success: true, message: "Pharma deleted successfully"})
    } catch (error) {
        res.status(500).json({success : false, message: "Failed to delete pharma", error: error.message})
    }
}

export const getPharma = async(req, res, next) => {
    try{
        const allPharma = await Pharma.find({})
        res.status(200).json({success:true, message:"All pharma found" ,data:allPharma} )

    }catch (error) {
        res.status(500).json({
            success : false, message: "Failed to get all pharma",error: error.message
        })
    }
}


export const getSinglePharma = async(req, res, next) => {
    const pharmaId = req.params.id;

    try {
        const singlePharma = await Pharma.findById({ _id: pharmaId });

        if (!singlePharma){
            return res.status(404).json({success : false, message: "Not found"})
        }
        

        res.status(200).json({success: true, message: "Pharma single details found", data: singlePharma})
    } catch (error) {
        res.status(500).json({success : false, message: "Failed to get single pharma", error: error.message})
    }
}