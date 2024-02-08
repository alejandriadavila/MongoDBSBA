import express from 'express'
import { ObjectId } from 'mongodb'
import accounts from '../models/accounts.mjs'

const router = express.Router()

// Find all accounts
router.get("/", async(req, res) =>{
    let foundAccounts = await accounts.find().limit(50)
    res.status(200).json({
        data: foundAccounts
    })
})

// Find a single account
router.get("/:id", async(req, res) =>{
    let foundAccount = await accounts.findById(req.params.id)
    res.status(200).json({
        data: foundAccount
    })
})

export default router