import express from 'express'
import accounts from '../models/accounts.mjs'

const router = express.Router()

// Find all accounts
router.get("/", async(req, res) =>{
    let foundAccounts = await accounts.find().limit(50)
    res.status(200).json({
        data: foundAccounts
    })
})

// Create an account
router.post("/", async(req, res) =>{
    let query = {account_id: req.params.account_id}
    let newDocument = req.body

    let preexistingAccount = await accounts.find(query)
    if (!preexistingAccount) res.send("Account number already in use.")
    else{
        if(newDocument.account_id && newDocument.limit){
            let result = await accounts.insertOne(newDocument)
            res.send(result).status(204)
        }
    }
})

// Find a single account
router.get("/:id", async(req, res) =>{
    let foundAccount = await accounts.findById(req.params.id)
    res.status(200).json({
        data: foundAccount
    })
})

// Add a product to an account
router.patch("/:id/add", async(req, res) =>{
    let query = {_id: req.params.id}

    let foundAccount = await accounts.find(query)
    let result = await accounts.findByIdAndUpdate(foundAccount[0]._id, {products: [...foundAccount[0].products, req.body]}, {new: true})

    res.status(200).json({
        data: result
    })
})

// Delete a single account
router.delete("/:id", async(req, res) =>{
    await accounts.findByIdAndDelete(req.params.id)
    res.status(204).json({
        data: "Item was deleted"
    })
})

export default router