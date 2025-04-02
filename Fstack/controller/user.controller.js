import User from '../model/User.model.js'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const registerUser = async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    return res.status(400).json({
      message: 'All fiels are required'
    })
  }

  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      res.status(400).json({
        message: 'User alrady exists'
      })
    }

    //creating user
    const user = await User.create({
      name,
      email,
      password
    })

    //checking the user
    if (!user) {
      res.status(400).json({
        message: 'User not registered'
      })
    }

    //genrating token
    const token = crypto.randomBytes(32).toString('hex')
    user.verificationToken = token

    //saving user obj to database
    await user.save()

    //send email
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS
      }
    })

    const mailOptions = {
      from: process.env.MAILTRAP_SENDER_EMAIL, // sender address
      to: user.email, // list of receivers
      subject: 'Verify Your email ✔', // Subject line
      text: `Plese Click on the following link: ${process.env.BASE_URL}/api/v1/users/verify/${token}`
    }

    await transporter.sendMail(mailOptions)

    //sending success message

    res.status(201).json({
      message: 'User registered succesfully',
      success: true
    })
  } catch (error) {
    res.status(400).json({
      message: 'User Not Registered',
      error,
      success: false
    })
  }
}

const verifyUser = async (req, res) => {
  const { token } = req.params
  console.log(token)
  if (!token) {
    res.status(400).json({
      message: 'invalid token'
    })
  }

  //finding token
  const user = await User.findOne({ verificationToken: token })

  if (!user) {
    res.status(400).json({
      message: 'user not foind'
    })
  }
  user.isVerified = true
  user.verificationToken = undefined
  await user.save()
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({
      message: 'All fiels are required'
    })
  }

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({
        message: 'invalid user or password'
      })
    }

    const isMatched = await bcrypt.compare(password, user.password)

    if (!isMatched) {
      return res.status(400).json({
        message: 'invalid user or password'
      })
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      'shhh',
      {
        expiresIn: '10h'
      }
    )

    const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 12 * 60 * 600 * 1000
          }

    res.cookie("test", token, cookieOptions)


    res.status(200).json({
      success: true,
      message: "Login succesfull",
      token,
      user:{
        id: user._id,
        name: user.name,
        role: user.role
      }
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Login Failed"
    })
  }
}

const getMe = async (req,res) => {
  try {
    console.log("reached at profile level");
    
  } catch (error) {
    
  }
}
export { registerUser, verifyUser, login, getMe }
