import {env} from "../config/env";
import mongoose from "mongoose";

//just commmenting this out as to save the 
export const connectDB = async () : Promise<void> =>{
    try{
        //console.log(`Connecting to mongoDB at ${env.mongodbUri}`);
        //const conn = await mongoose.connect(env.mongodbUri);
        //console.log(`MongoDB connected:${conn.connection.host}`);
        console.log(`Successful connection!`);

    }catch (error){
        console.error(`Error connecting to MongoDB:${error}`);
        process.exit(1);
    }
}