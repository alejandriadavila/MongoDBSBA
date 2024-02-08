import express from 'express'
import db from "../db/conn.mjs"
import { ObjectId } from 'mongodb'
import customers from '../models/customers.mjs'

const router = express.Router()

// Find all customers
router.get("/", async(req, res) =>{
    let foundCustomers = await customers.find().limit(50)
    res.status(200).json({
        data: foundCustomers
    })
})

export default router