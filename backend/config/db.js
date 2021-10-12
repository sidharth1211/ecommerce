import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
    useUnifiedTopology: true,
  
        })
        console.log(`MongoDb connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB;