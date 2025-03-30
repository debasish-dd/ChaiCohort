import User from '../model/User.model.js'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import bcrypt from 'bcryptjs'

const registerUser = async (req, res) => {
  res.send('registered')
  
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
