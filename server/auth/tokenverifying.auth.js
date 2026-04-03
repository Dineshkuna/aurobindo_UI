import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';


export const userauth = async(req, res, next) => {
    const token = req.headers.authorization;


    if(!token || !token.startsWith('Bearer')){
        return res.status(401).json({
            success: false,
            message: "No token, Authorization denied"
        })
    }

    try {
        const tokengetting = token.split(" ")[1]

        const decodedToken = jwt.verify(tokengetting, process.env.TOKEN)

         req.user = decodedToken;

        req.userId = decodedToken.id;
        req.userRole = decodedToken.role;

        next();

    }catch (error) {
        res.status(401).json({
            success: false,
            message: "Token is not valid Do login again"
        })

    }
}

export const roleRoute = (roles) => (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "user not found"
            });
        }

        const userRole = req.userRole;

        if (userRole === "user" && roles.includes("user")) {
            next();
        } else if (userRole === "admin" && roles.includes("admin")) {
            next();
        } else {
            return res.status(401).json({
                success: false,
                message: "not authorized to access this route"
            });
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

