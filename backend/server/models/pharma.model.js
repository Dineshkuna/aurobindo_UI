import mongoose from "mongoose";


const PharmaSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    itemCode: {
      type: String,
      required: true,
      unique: true,
    },
    strength: {
      type: String,
      required: true,
    },
    dosageForm: {
      type: String,
      required: true,
      enum: ["Tablets", "Capsules", "Oral Suspension", "Tablets for Oral Suspension"], 
    },
    market: {
      type: String,
      required: true,
      enum: ["Pepfar Universal New", "UAE", "Pepfar Universal New_Non-Royalty"]
    },
    gtin: {
      type: String,
      required: true,
    },
    packInsertUrl: {
      type: String, // link for "View/Download"
    },
  },
  
);


export default mongoose.model("Pharma", PharmaSchema);