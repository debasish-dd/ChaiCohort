import jwt from "jsonwebtoken"

export const isLogedIn = async (req, res, next) => {
  try {
    let token = req.cookies?.token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authentication Failed'
      })
    }
    
   try {
    const decoded =  jwt.verify(token, process.env.JWT_SECRET);
     req.user = decoded;

     next();
   } catch (error) {
     console.log("Auth middleware failure");
     
     return res.status(500).json({
      success: false,
      message: "internal server error"
    }) 

   }

  } catch (error) {}

  next()
}
