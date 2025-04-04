import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";

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

// Register routes
 // Corrected to use the correct variable name

app.get("/", (req, res)=>{
  res.send("Hello");
})
// Start server
app.listen(8080, ()=>{
  console.log('listening to port : 8080'); 
});

// app.use("/api/auth", authRoutes)
