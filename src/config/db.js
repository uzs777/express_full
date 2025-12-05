import { connect } from "mongoose";
import { config } from "dotenv";
config()

export async function connectDB() {
    try {
        await connect(process.env.MONGO_URI)
        console.log("connnect db");
    } catch (error) {
        console.error("error on connnect ");
    }
}