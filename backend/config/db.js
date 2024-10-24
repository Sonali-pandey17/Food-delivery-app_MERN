import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sonali_pandey1:87458S94603@cluster0.8m9ye.mongodb.net/Food-delivery-app').then(()=>console.log('Database connected'))
}