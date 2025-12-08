import { Schema, model } from "mongoose";
import { Genders, Roles } from "../enums/users-enums.js"

const usersSchema = new Schema({
    fullName: { type: String},
    phoneNumber: { type: String, unique: true, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    gender: { type: String, enum: [Genders.FEMALE, Genders.MALE] },
    role: {
        type: String,
        enum: [
            Roles.SUPERADMIN,
            Roles.ADMIN,
            Roles.CUSTOMER,
            Roles.SELLER,
        ],
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model("User", usersSchema)