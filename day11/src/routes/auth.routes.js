const express = require("express")
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const authRoutes = express.Router()
const crypto = require("crypto")

authRoutes.post("/register", async (req, res) => {
    const { email, name, password } = req.body

    const isUserAlreadyExists = await userModel.findOne({ email })

    if (isUserAlreadyExists) {
        return res.status(409).json({
            message: "user Already exists with this email address"
        })
    }

    const hash = crypto.createHash("md5").update(password).digest("hex")

    const user = await userModel.create({
        email, password: hash, name
    })

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.JWT_SECRET
    )

    res.cookie("jwt_token", token)
    res.status(201).json({
        message: "user registered",
        user,
        token
    })
})

authRoutes.post("/protected", (req, res) => {
    console.log(req.cookies);
    res.status(200).json({
        message: "This is a proctected route"
    })
})

authRoutes.get("/get-me", async (req,res)=>{
    const token = req.cookies.token

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await userModel.findById(decoded.id)

    res.json({
        name: user.name,
        email: user.email,
    })
})



authRoutes.post("/login", async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(404).json({
            message: "User not found with this email address"
        })
    }

    const isPasswordMatched = user.password === crypto.createHash("md5").update(password).digest("hex")

    if (!isPasswordMatched) {
        return res.status(401).json({
            message: "Invalid password"
        })
    }

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET)  
    
    res.status(200).json({
        message: "User logged in successfully",
        user
    })
})

module.exports = authRoutes