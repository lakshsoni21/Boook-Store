import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import userRoute from "./routes/userRoute.js"
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const mongoDBURL = process.env.mongoDBURL;
const app = express();

app.use(express.json());
app.use(cors());

// Initiliaze the mongo DB
mongoose
  .connect(mongoDBURL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.json("Hello");
} )

app.use("/books", booksRoute);
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log("App is listening to port : " + PORT);
});
