import mongoose, { mongo } from "mongoose"

const transactionsSchema = new mongoose.Schema({
    account_id: Number,
    transaction_count: Number,
    bucket_start_date: Date,
    bucket_end_date: Date,
    transactions: []
})

export default mongoose.model("Transactions", transactionsSchema)