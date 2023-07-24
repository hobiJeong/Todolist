"use strict";

const express = require("express");
const router = express.Router();

const postctrl = require("./todoController");

router.get("/", (req, res) => {
    res.send("화이팅");
    //루트
});

router.get("/post", (req,res) => {
    res.send("글작성 공간");
});

router.post("/post", (req, res) => {
    
});





module.exports = router;