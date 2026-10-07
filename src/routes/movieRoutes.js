import express from "express";

const router = express.Router();

router.post("/hello", (req,res) => {
    res.json({message: "Post request"})
})

export default router;