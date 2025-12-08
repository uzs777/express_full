import { config } from "dotenv";
config();

export const envConfig = {
    PORT: Number(process.env.PORT),
    MONGO_URI: String(process.env.MONGO_URI),
    SUPERADMIN: {
        PHONE: String(process.env.SUPERADMIN_PHONE),
        PASSWORD: String(process.env.SUPERADMIN_PASSWORD)
    }
};