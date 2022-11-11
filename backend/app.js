import express, { request } from "express";
import UserRoutes from "./routes/UserRoutes.js"
import db from "./config/db.js"
import User from "./models/UserModel.js";
import cors from 'cors'
const app = express()
const port = 5000

try {
  await db.authenticate()
  User.sync()
  console.log("Database connected successfully.");
} catch (error) {
  console.log(error);
}

app.use(express.json())
app.get('/test',(req,res) =>{console.log('testing')})
app.use('/api', UserRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})