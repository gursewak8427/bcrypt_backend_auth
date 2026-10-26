import UserModel from "./userModel.js";
import bcrypt from "bcryptjs";

export const registerController = async (req, res) => {
    const { name, id, pass } = req.body;


    const hashPass = await bcrypt.hash(pass, 10)

    const newUser = await UserModel.create({
        user_name: name,
        user_id: id,
        password: hashPass
    })

    return res.json({
        success: true,
        message: "Registration completed",
        details: newUser
    })
}

export const loginController = async (req, res) => {

    const { id, pass } = req.body;

    const user = await UserModel.findOne({
        user_id: id,
    })

    if (!user) {
        return res.json({
            success: false,
            message: "user not found with this id",
        })
    }

    const isPassSame = await bcrypt.compare(pass, user.password)
    if (!isPassSame) {
        return res.json({
            success: false,
            message: "entered password is wrong",
        })
    }

    user.password = undefined;

    return res.json({
        success: true,
        message: "Login compelted",
        details: user
    })
}