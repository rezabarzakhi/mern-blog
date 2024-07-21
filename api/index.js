import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

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
  console.log("server running on port 30003");
});
