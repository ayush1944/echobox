import mongoose from "mongoose";

export default function db (){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log("MongoDB is connected successfully"))
    .catch(err => console.error("MongoDB connection error",err))
}