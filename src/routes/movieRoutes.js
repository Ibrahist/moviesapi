import express from "express";

const router = express.Router();

router.get("/hello", (req,res) => {
    res.json({message: "Get request"})
})
router.post("/hello", (req,res) => {
    res.json({message: "Post request"})
})
router.put("/hello", (req,res) => {
    res.json({message: "Put request"})
})
router.delete("/hello", (req,res) => {
    res.json({message: "Delete request"})
})

export default router;  