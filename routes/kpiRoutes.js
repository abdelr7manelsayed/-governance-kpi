import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const kpis = await KPI.find();
  res.json(kpis);
});

router.post("/", async (req, res) => {
  const newKpi = new KPI(req.body);
  await newKpi.save();
  res.json(newKpi);
});

export default router;
