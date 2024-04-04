import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import usersRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.options("*", cors());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", usersRoutes);

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running on port ${PORT}`);
});
