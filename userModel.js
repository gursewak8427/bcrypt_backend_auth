import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    user_name: {
        type: String
    },
    user_id: {
        type: String
    },
    password: {
        type: String
    }
})

// collection name
const UserModel = mongoose.model("users", UserSchema)

export default UserModel;