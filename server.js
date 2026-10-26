import express from "express"
import cors from "cors"
import authRoutes from "./authRoutes.js"
import mongoose from "mongoose"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/auth", authRoutes)

mongoose.connect("mongodb+srv://mern_application:Tc-D-aa6_EzZUdz@cluster0.ibf0x.mongodb.net/25_oct_prismaple_instagram?retryWrites=true&w=majority")
    .then(() => {
        console.log("DB Connected")
    })

app.listen(8000, () => {
    console.log(`server started at port 8000`)
})