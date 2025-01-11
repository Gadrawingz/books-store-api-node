import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT_IN_USE || 3005;

const corsOptions = {
  origin: "http://localhost:5173", // 4 vite app
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// API routes

// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
