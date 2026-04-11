import jwt from 'jsonwebtoken';

export const verifyAdminToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No token provided"
        });
    }

    try {
        const secret = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, secret);

        if (decoded.role !== "admin" && decoded.role !== "superadmin") {
            return res.status(403).json({
                success: false,
                message: "Admin access required"
            });
        }

        req.user = decoded;
        next();
    } catch (error) {
        console.error('Token verification error:', error.message);
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
            error: error.message
        });
    }
};
