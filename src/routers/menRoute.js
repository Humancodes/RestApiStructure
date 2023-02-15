const express = require("express");
const router = new express.Router();
const MenRanking = require("../models/mens")

router.post("/mens",async (req,res)=>{
    try {
      const addingMenRecords =  new MenRanking(req.body)
      const insertMens = await addingMenRecords.save();
      res.status(201).send(insertMens);
    } 
    catch(e){
           res.status(400).send(e);
    }  
});

router.get("/mens", async (req,res)=>{
   try {
       const getMen = await MenRanking.find({}).sort({"ranking":1});
       res.send(getMen);
     } 
     catch(e){
            res.status(400).send(e);
     }  
});

router.get("/mens:id", async (req,res)=>{
   try {
       const _id = req.params.id;
       const getMen = await MenRanking.findById(_id);
       res.send(getMen);
     } 
     catch(e){
            res.status(400).send(e);
     }  
});

router.patch("/mens:id", async (req,res)=>{
   try {
       const _id = req.params.id;
       const getMen = await MenRanking.findByIdAndUpdate(_id,req.body);
       res.send(getMen);
     } 
     catch(e){
            res.status(500).send(e); //500 for server error bcz data is stored
     }  
});

router.delete("/mens:id", async (req,res)=>{
   try {
       const _id = req.params.id;
       const getMen = await MenRanking.findByIdAndDelete(_id);
       res.send(getMen);
     } 
     catch(e){
            res.status(400).send(e);
     }  
});

module.exports = router;