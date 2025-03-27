import User from '../model/User.model.js'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import bcrypt from 'bcryptjs'

const registerUser = async (req, res) => {
  res.send('registered')
  const { name, email, password } = req.body
  if (name || email || password) {
    return res.status(400).json({
      message: 'all fields are requred'
    })
  }

  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({
        message: 'user alrady exists'
      })
    }

    const newUser = await User.create({
      name,
      email,
      password
    })

    if (!newUser) {
      return res.status(400).json({
        message: 'user not registered'
      })
    }

    const token = crypto.randomBytes(32).toString('hex')
    newUser.verificationToken = token
    await newUser.save()

    //send mail

    const transporter = nodemailer.createTransport({
      host: process.env.MSILTRAP_HOST,
      port: process.env.MSILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MSILTRAP_USERNAME,
        pass: process.env.MSILTRAP_PASSWORD
      }
    })

    const mailOptions = {
      from: MSILTRAP_SENDEREMAIL, // sender address
      to: newUser.email, // list of receivers
      subject: 'Verify Your Email ✔', // Subject line
      text: `plese click on the folowing link: 
            ${process.env.BASE_LINK}/api/v1/users/verify/${token}          
      `, // plain text body
      html: '<b>Hello world?</b>' // html body
    }

    await transporter.sendMail(mailOptions)

    res.status(201).json({
      message: 'User registered Succesfully',
      success: true
    })
  } catch (error) {
    res.status(400).json({
      message: 'User not registered',
      success: false,
      error
    })
  }
}

const verifyUser = async (req, res) => {
  const { token } = req.params
  console.log(token)
  if (!token) {
    return res.status(400).json({
      message: 'Invalid Token'
    })
  }
  const user = await User.findOne({ verificationToken: token })
  if (!user) {
    return res.status(400).json({
      message: 'Invalid Token'
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
      message: 'All Fields Are Required'
    })
  }
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({
        message: 'Invalid Email or Password'
      })
    }

    const isMatched = await bcrypt.compare(password, user.password)
    if (!isMatched) {
      return res.status(400).json({
        message: 'Invalid Email or Password'
      })
    }
    const toke = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      'shhhhh',
      {
        expiresIn: '24h'
      }
    )

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 600 * 1000
    }
    res.cookie('test', token, cookieOptions)
    res.status(400).json({
      message: 'Login Successful',
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role
      }
    })
  } catch (error) {}
}

export { registerUser, verifyUser, login }
