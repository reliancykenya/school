import express from "express";
import UserRoutes from "./routes/UserRoutes.js"
import db from "./config/db.js"
import cors from 'cors'
const app = express()
const port = 5000

try {
  await db.authenticate()
  console.log("Database connected successfully.");
} catch (error) {
  console.log(error);
}

app.use(cors())
app.use(express.json())
app.use('/api', UserRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})