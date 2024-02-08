import express from "express"
import db from "../db/conn.mjs"
import { ObjectId } from "mongodb"
import transactions from "../models/transactions.mjs"

const router = express.Router()

// Find all transactions
router.get("/", async(req, res) =>{
    let foundTransactions = await transactions.find().limit(50)
    res.status(200).json({
        data: foundTransactions
    })
})

export default router