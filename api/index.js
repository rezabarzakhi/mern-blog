import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoutes from "./routes/user.routes.js"

dotenv.config()

mongoose
  .connect(process.env.mongo)
  .then(() => {
    console.log("mongoDB is conncted");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.listen(3000, () => {
  console.log("server running on port 3000");
});
app.use('/api/user', userRoutes)