import express from "express";
import db from "../db.js";

const router = express.Router()
// get all activities for logged in users
router.get('/', (req,res)=>{ })


//create a new activity
router.post('/', (req,res)=>{ })

// update an activity
router.put('/:id', (req,res)=>{ })

// delete an activity
router.delete('/:id', (req,res)=>{ })

export default router