import User from '../models/user.model.js';


export const createNewUser = async(req, res, next) => {
    const {email, password, name} = req.body;

    try {
        let user = await User.findOne({
            email : email

        })
        if(user){
            return res.status(400).json({success:false, message:"User already exists"})
        }
        user = new User ({
            email,
            password,
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