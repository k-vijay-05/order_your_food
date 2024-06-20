import mongoose from "mongoose"

 export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://kvijay:kvijay%40456@cluster0.wp3eqbz.mongodb.net/food-order').then(()=>console.log("DB CONNECTED"));
}
