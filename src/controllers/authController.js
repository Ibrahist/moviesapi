import { prisma } from "../config/db.js"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js"


// REGISTER USER FUNCTIONALITY----------------------------------------- 
// Register user 
const register = async (req, res) => {
  const { name, email, password } = req.body;

  // check if use already exist 
  const userExist = await prisma.user.findUnique({
    where: { email } });

  if (userExist) {
    res.status(400).json({
      status: "error",
      message: "User already exists with this email" 
    });
  }

  // Hash password 
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);


  // Create a user and add to the table 
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    }
  });

    // Generate JWT Token
  const token = generateToken(user.id, res);

  res.status(201).json({
    status: "success",  
    data: {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token,
    }
  });
};


// LOGIN USER FUNCTIONALITY----------------------------------------- 
// login user 
const login = async (req, res) => {
  const { email, password } = req.body;


  // check if user email exist on the table 
  const user = await prisma.user.findUnique({
    where: { email } })

  if (!user) {
    return res.status(401).json({ message: "Invalid Email or password" })
  }

  // Compare/verify the password 
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid Email or password" })
  }

  // Generate JWT Token
  const token = generateToken(user.id, res);

  res.status(200).json({
    status: "success",  
    data: {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token,
    }
  });
}

// LOGOUT FUNCTIONALITY----------------------------------------------
const logout = async (req, res) => {
    res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  })
  
  res.status(200).json({
    status: "success",
    message: "User logged out successfully",
  })
} 

export { register, login, logout };