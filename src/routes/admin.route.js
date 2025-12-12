import { Router } from "express";
import admin from "../controllers/admin.controller.js";
import auth from "../controllers/auth.controller.js"
import { validator } from "../middlewares/validator-hedler.js"
import adminValid from "../validation/user.validation.js"

const route = Router();

route
    .post("/", admin.create)
    .post("/signin", validator(adminValid.signin), auth.signIn)
    .post("/token", auth.getAccessToken)
    .get("/", admin.findAll)
    .get("/:id", admin.findById)
    .patch("/:id", admin.update)
    .delete("/:id", admin.delate)


export default route