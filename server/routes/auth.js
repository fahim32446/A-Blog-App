import express from "express";
import user from "../model/User.js"
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";


const router = express.Router();


//Register

router.post('/register', async (req, res) => {
    const newUser = new user({
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });

    try {

        const existingUser = await user.findOne({ email: req.body.email });

        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
        } else {
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        }


    } catch (error) {

        res.status(500).json(error);
        console.log(error);
    }
})


//Login
router.post('/login', async (req, res) => {

    try {
        const findUser = await user.findOne({ email: req.body.email });
        !findUser && res.status(401).json("Wrong Credentials");
        const hashedPassword = CryptoJS.AES.decrypt(findUser.password, process.env.PASS_SEC);
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        OriginalPassword !== req.body.password && res.status(401).json("Wrong Credentials!")


        const accessToken = jwt.sign(
            {
                id: findUser._id,
            },
            process.env.JWT_SEC,
            { expiresIn: "1h" }
        );

        res.status(200).json(accessToken)
    

    } catch (error) {
        res.status(500).json(error)
     
    }
})


export default router;