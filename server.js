// server.js
import express from "express";
import "dotenv/config.js";
import cors from "cors";
import connectDB from "./server/configs/db.js";
import userRouter from "./server/routes/userRoutes.js";
import hotelRouter from "./server/routes/hotelRoutes.js";
import roomRouter from "./server/routes/roomRoutes.js";
import bookingRouter from "./server/routes/bookingRoutes.js";
import authRouter from "./server/routes/authRoutes.js";
import connectCloudinary from "./server/configs/cloudinary.js";
import faceAuthRoutes from "./server/routes/faceAuthRoutes.js";
connectDB();
connectCloudinary();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.get("/", (req, res) => res.send("API IS WORKING"));

app.use("/api/auth", authRouter);  // ✅ new auth routes
app.use("/api/user", userRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/face", faceAuthRoutes);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
