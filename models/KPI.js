import mongoose from "mongoose";

const KPISchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  target: { type: Number, required: true },
  status: { type: String, default: "pending" },
});

export default mongoose.model("KPI", KPISchema);
