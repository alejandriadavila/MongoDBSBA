import mongoose from "mongoose"

const accountsSchema = new mongoose.Schema({
    account_id: Number,
    limit: Number,
    products: []
})

export default mongoose.model("Accounts", accountsSchema)