import { Router } from "express";
import Category from "../controllers/category.controller.js"
import { validator } from "../middlewares/validator-hedler.js";
import categoryValidation from "../validation/category.validation.js";

const Categoryroutes = Router();

Categoryroutes
    .post("/",validator(categoryValidation.create), Category.create)
    .get("/", Category.findAll)
    .get("/:id", Category.findById)
    .patch("/:id",validator(categoryValidation.update), Category.update)
    .delete("/:id", Category.delate)

export default Categoryroutes