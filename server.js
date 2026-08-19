import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import kpiRoutes from "./routes/kpiRoutes.js";
import alertRoutes from "./routes/alertRoutes.js";
import reportsRoutes from "./routes/reportsRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use("/api/kpis", kpiRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/reports", reportsRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => console.error("❌ Database connection error:", err));

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
