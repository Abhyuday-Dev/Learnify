import { authenticateJwt } from "../middlewares";
import { Jwt } from "jsonwebtoken";
import express from "express";
const { Admin, Course } = require("../db");

const router = express.Router();

router.get("/me", authenticateJwt, async (req, res) => {
  const userId = req.headers["userId"];
  const admin = await Admin.findOne({ _id: userId });

  if (!admin) {
    res.status(403).json({ message: "Admin not found" });
  }
  res.json({
    username: admin.email,
    name: admin.username,
  });
});

router.post("/signup",async(req,res)=>{
    const {email,username,password} = req.body;
})
