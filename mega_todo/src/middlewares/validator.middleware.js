import {validationResult} from "express-validator"
import {ApiERROR} from "../utils/api-errors.js"

export const validate = (req, res, next)=>{
const errors = validationResult(req);

if (errors.isEmpty()) {
    next();
}

const extractedErrors = []
 errors.array().map((err)=> extractedErrors.push({
    [err.path]: err.msg
 }))

 throw new ApiERROR(422, "recived data is not valid", extractedErrors)


}