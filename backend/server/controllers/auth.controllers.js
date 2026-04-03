import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const createNewUser = async(req, res, next) => {
    const {email, password, name} = req.body;

    try {
        let user = await User.findOne({
            email : email

        })
        if(user){
            return res.status(400).json({success:false, message:"User already exists"})
        }

        const salt = await bcrypt.genSalt(10)
        const passwordhash = await bcrypt.hash(password, salt)

        
        user = new User ({
            email,
            password : passwordhash,
            name
        })

        await user.save();

        res.status(200).json({
            success:true,
            message:"User created Successfully"
        })
    } catch (error) {
        res.status(500).json({success : false, message: "Failed to create user", error: error.message})
    }
    
}


export const login  = async(req, res, next) => {
    const {email} = req.body;

    try {
        let user = await User.findOne({email : email});

        if(!user){
            res.status(404).json({success: false, message:"Email not found"})
        }

        const matchpassword = await bcrypt.compare(req.body.password, user.password);

        if(!matchpassword){
            return res.status(400).json({success: false, message:"Wrong password"})
        }

        const createtoken = (user) =>{
            return jwt.sign(
                {id: user._id, role:user.role},
                process.env.TOKEN,
                {
                    expiresIn : "1d"
                }

            )
        }

        const token = createtoken(user)

        const {password, role, ...rest} = user._doc;

        return res.status(200).json({
            success:true,
            message:"Login successful",
            token,
            data: {...rest},
            role

        })
    } catch (error) {
         return res.status(500).json({
            success:false,
            message:"Login failed",
            error: error.message
        })

    }


}


export const updateUserProfile = async(req, res, next) => {
    const userId = req.params.id;

    try {
        const updateUser = await User.findByIdAndUpdate(userId, {$set: req.body}, { new: true });

        res.status(200).json({success: true, message: "User profile updated successfully", data: updateUser})
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
}


export const deleteUserProfile = async(req, res, next) => {
    const userId = req.params.id;

    try{
        await User.findByIdAndDelete(userId);

        return res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to delete User",
            error: error.message
        })
    }
}
 

export const allusers = async(req, res, next)=> {
    try {
        const users = await User.find({}).select("-password");

        return res.status(200).json({
            success:true,
            message:"All users found",
            data: users
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Failed to get all users",
            error: error.message
        })

    } 
}


export const singleuser = async(req, res, next)=> {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);

        const usersdata = user;
        console.log(usersdata);
        
        return res.status(200).json({
            success:true,
            message:"User found",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Failed to get user",
            error: error.message
        })
    }
}
