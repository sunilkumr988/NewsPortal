import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";

dotenv.config()


// MongoDB connection
mongoose
.connect(process.env.MONGO_URI)
.then(() => {
  console.log("Database is connected")
})
.catch((err) => {
  console.log(err)
})

const app = express();

// for allowing json object in req body
app.use(express.json())


app.get("/", (req, res)=>{
  res.send("Hello");
})
// Start server
app.listen(7000, ()=>{
  console.log('listening to port : 7000'); 
});

app.use("/api/auth", authRoutes)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500

  const message = err.message || "Internal Server Error"

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})