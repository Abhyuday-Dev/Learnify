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

router.post("/signin",async(req,res)=>{

});

router.post("/courses", authenticateJwt, async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json({ message: "Course Created Successfully", courseId: course.id });
});

router.get("/courses",authenticateJwt,async(req,res)=>{

});

router.get("/courses/:courseId",authenticateJwt,async(req,res)=>{
  const courseId=req.params.courseId;
  const course=await Course.findById(courseId);
  if(course){
      res.json({course})
  }
  else{
      res.status(404).json({message:"Course Not Found"});
  }
});

router.put("/updateCourse/:id",async(req,res)=>{});

router.delete("/course/:id",async(req,res)=>{});
