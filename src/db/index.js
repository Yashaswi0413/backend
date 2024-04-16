import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { MongoGridFSChunkError } from "mongodb";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Mongo DB connected !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection error : ", error);
        process.exit(1);
    }
}

export default connectDB