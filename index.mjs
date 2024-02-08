import express from "express"
import mongoose from "mongoose"


const PORT = 5050
const app = express()

app.use(express.json())

await mongoose.connect(process.env.ATLAS_URI)

// Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...")
  })
  
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
  