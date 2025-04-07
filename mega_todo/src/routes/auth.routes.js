import  { Router } from "express"
import {registerUser} from "../controllers/auth.controller.js"
import {validate} from "../middlewares/validator.middleware.js"
import {userRegistrationValidator} from "../validator/index.js"

const router =  Router()

ter.route("/register").get( userRegistrationValidator(), validate ,registerUser)

export default router