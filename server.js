import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import kpiRoutes from "./routes/kpiRoutes.js";
import alertRoutes from "./routes/alertRoutes.js";
import reportsRoutes from "./routes/reportsRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error(err));

app.use("/api/kpi", kpiRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/reports", reportRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
