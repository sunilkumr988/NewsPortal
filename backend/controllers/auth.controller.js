import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    // Check if fields are empty
    if (
        !username ||
        !email ||
        !password ||
        username === "" ||
        email === "" ||
        password === ""
      ) {
        return res.status(400).json({ message: "All fields are required" })
      }

    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create new user
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    })

    try {
        // Save the new user to the database
        await newUser.save();

        res.json("Signup successful");
    } catch (error) {
        // Send error response if save fails
        next(error)
    }
};
