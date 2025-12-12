import { config } from "dotenv";
config();

export const envConfig = {
    PORT: Number(process.env.PORT),
    MONGO_URI: String(process.env.MONGO_URI),
    SUPERADMIN: {
        PHONE: String(process.env.SUPERADMIN_PHONE),
        PASSWORD: String(process.env.SUPERADMIN_PASSWORD),
        EMAIL: String(process.env.SUPERADMIN_EMAIL)
    },
    ACCESSTOKEN: {
        KEY: String(process.env.ACCESS_TOKEN_KEY),
        TIME: String(process.env.ACCESS_TOKEN_TIME)
    },
    REFRESHTOKEN: {
        KEY: String(process.env.REFRESH_TOKEN_KEY),
        TIME: String(process.env.REFRESH_TOKEN_TIME)
    }
};