import mongoose from "mongoose"

const customersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: String,
    birthdate: Date,
    email: String,
    accounts: [Number],
    tier_and_details: Object
})

export default mongoose.model("Customers", customersSchema)