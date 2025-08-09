import  jwt  from 'jsonwebtoken';

const authMiddleware = async (req, res, next) =>{
    const {token} = req.headers;
    if(!token){
        return res.json({success:false, message:'Not Authorized, login again'})
    }

    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error)
        res.json({success:false, message:'Error'})
    }
}

export default authMiddleware;
 

// authMiddleware.js



// import jwt from "jsonwebtoken";

// export const authenticateUser = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   // 🔹 Step 1: Check if token exists
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "You must be logged in to perform this action." });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     // 🔹 Step 2: Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // 🔹 Step 3: Attach user info to request
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Invalid or expired token." });
//   }
// };
