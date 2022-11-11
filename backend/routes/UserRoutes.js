import express from "express";
import { getAllUsers, createUser, updateUser, deleteUser, getUser } from "../controllers/UserController.js"

const router = express.Router()

router.get('/users', getAllUsers);

router.post('/users', createUser);

router.patch('/users/:username', updateUser)

router.delete('/users/:id', deleteUser)

router.get('/users/:id', getUser)

export default router