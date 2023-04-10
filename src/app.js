import express from "express";
import morgan from "morgan";
import cors from "cors";
import indexRoutes from "./routes/chat.router.js";

const app = express();

// SETTINGS
app.set("port", process.env.PORT || 8080);

// MIDDLEWARES
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// ROUTES
app.use(indexRoutes);

export default app;