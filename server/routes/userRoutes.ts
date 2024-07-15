import { authenticateJwt } from "../middlewares";
import express from "express";
const { User, Course } = require("../db");

const SECRET=process.env.SECRET||"";

const router = express.Router();

router.post("/signup", async (req, res) => {
  
});

router.post("/login", async (req, res) => {

});

router.get("/courses",authenticateJwt,async(req, res) => {

});


  
  
  module.exports = router;