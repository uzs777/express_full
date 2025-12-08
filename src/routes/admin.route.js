import { Router } from "express";
import admin from "../controllers/admin.controller.js";

const route = Router();

route
    .post("/", admin.create)
    .get("/", admin.findAll)
    .get("/:id", admin.findById)
    .patch("/:id", admin.update)
    .delete("/:id", admin.delate)


export default route