import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import eventRoutes from './routes/eventRoutes'
import commentRoutes from './routes/commentRoutes'

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended: false}))
app.use("/api", eventRoutes);
app.use("/api", userRoutes);
app.use("/api", commentRoutes);

export default app;
