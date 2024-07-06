import express from "express"
import cors from "cors"
import {connectDB} from './config/db.js'
import foodRouter from "./routes/foodroute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import 'dotenv/config'

//app config
const app=express()
const port=4000

//middleware
app.use(express.json())
app.use(cors())

//API ENDPOINTS
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
//DB CONNECTION
connectDB();
app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})