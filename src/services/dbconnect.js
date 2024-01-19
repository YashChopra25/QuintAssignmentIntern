import mongoose from "mongoose"

export default async function dbconnect(){
    try {
        const res =await mongoose.connect(process.env.MONGODB_URL);
        console.log("connected succesfully")
    } catch (error) {
        console.error(error)
    }
}