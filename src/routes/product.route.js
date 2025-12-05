import { Router } from "express";
import { validator } from "../middlewares/validator-hedler.js";
import productValidator from "../validation/product.validation.js";
import Products from "../controllers/products.controller.js"

const Productroutes = Router();

Productroutes
    .post("/", validator(productValidator.create), Products.create)
    .get("/", Products.findAll)
    .get("/:id", Products.findById)
    .patch("/:id", validator(productValidator.update), Products.update)
    .delete("/:id", Products.delate)

export default Productroutes