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
       
    },
    market: {
      type: String,
      required: true,
      
    },
    gtin: {
      type: String,
      required: false,
    },
    packInsertUrl: {
      type: String, 
    },
    user: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      name : {
        type: String,
        required: true,
      }
    }
  },
  
);


export default mongoose.model("Pharma", PharmaSchema);