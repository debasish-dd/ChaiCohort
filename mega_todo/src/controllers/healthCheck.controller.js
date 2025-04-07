import {ApiResponse} from "../utils/api-response.js"

const healthCheck = async (req, res)=>{
   try {
    
    res.ststus(200).json(new ApiResponse(200, {message: "server is running succesfully"}))
    
   } catch (error) {
    
   }
}

export {healthCheck}