import User from "../models/UserModel.js"

export const createUser = async (req , res) => {
    try {
        await User.create(req.body)
        res.json({message: "User Created Successfully."})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getAllUsers = (req, res) => {
    res.status(200).send({"message": "All users"})
}

export const updateUser = async (req, res) => {
    try {
        console.log(req.params.username)
        await User.update(req.body, {
            where:{
                username: req.params.username
                
            }
        })
        res.json({message: "Record Updated Successfully"})
    }   catch (error) {
        res.json ({message: error.message})
    }
}

export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where:{
                id: req.params.id
                           }
        })
        res.json({message: "User Deleted Successfully"})
    }   catch (error) {
        res.json ({message: error.message})
    }
}

export const getUser = async (req, res) => {
    try {
        await User.get({
            where:{
                id: req.params.id
            }
        })
        res.json({message: "User Available"})
    }   catch (error) {
        res.json ({message: error.message})
    }
}

