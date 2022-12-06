import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/post.js";
import userRouters from "./routes/user.js";

// Constants
const PORT = process.env.PORT || 8000;

// Configurations
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Mongoose setup
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log(`⚡️[server]: ${error.message}`);
    } else {
      console.log("⚡️[server]: Connected to MongoDB successfully");
    }
  }
);

// Create a server object
app.listen(PORT, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRouters);
app.use("/api/posts", postRoutes);

// Route not found
app.use("/*", (req, res) => {
  res.status(501).send("Not implemented");
});
