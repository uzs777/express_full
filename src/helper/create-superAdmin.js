import SUPERADMIN from "../model/users.js"
import { Roles } from "../enums/users-enums.js"
import { envConfig } from "../config/index.js"
import hashedData from "../utils/hashed-data.js"

export async function createSUPERADMIN() {
    try {
        const existsSuperAdmin = await SUPERADMIN.findOne({ role: Roles.SUPERADMIN })
        if (!existsSuperAdmin) {
            const superAdmin = await SUPERADMIN.create({
                role: Roles.SUPERADMIN,
                phoneNumber: envConfig.SUPERADMIN.PHONE,
                password: await hashedData.decode(envConfig.SUPERADMIN.PASSWORD)
            });
            console.log('Super admin created successfull', superAdmin);
        }
    } catch (error) {
        console.error("Error on create super Admin ", error);
    }
};