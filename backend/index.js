import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"; // Corrected variable name here to match your import

dotenv.config();

const app = express();
// for allowing JSON objects in req body
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)

  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => {
    console.error("MongoDB Connection Error:",err);
  });

// Register routes
 // Corrected to use the correct variable name

// Start server
app.listen(7000, () => {
  console.log('Server running on port 7000');
});
app.use("/api/auth", authRoutes)
