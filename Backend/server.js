import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMOngoDb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(cookieParser());

 //Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!!");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


// Connect to MongoDB and start the server
connectToMongoDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error("Failed to connect to MongoDB", err);
});
