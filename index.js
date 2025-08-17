import express from "express"
import mongoose from 'mongoose'
import cors from "cors"
import "dotenv/config";
import userRoutes from "./routes/user.route.js"

const PORT = process.env.PORT ?? 3000

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", userRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✔️")
    app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`))
  })
  .catch((error) => console.log("MongoDB Error: ", error))
