import { async_handler } from "../utils/async_handler";

const registerUser = async_handler(async (req, res) => {
    const {username, email, password, role} = req.body
    //validation
    if (!email || !password) {
        
    }
    if (password.length<8) {
        
    }

    const isValidated = validateMe(password)
})

export {registerUser}