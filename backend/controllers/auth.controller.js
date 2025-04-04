import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utilis/error.js';

export const signup = async (req, res, next) => {
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
        return next(errorHandler(400, "All fields are required"))
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
        await newUser.save();

        res.json("Signup successful");
    } catch (error) {
        next(error)
    }
};
