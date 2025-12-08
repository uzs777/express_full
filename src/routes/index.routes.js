import { Router } from "express";
import Categoryroutes from "./category.route.js";
import Productroutes from "./product.route.js"
import AdminRouter from "./admin.route.js"

const router = Router();

router
    .use("/category", Categoryroutes)
    .use("/products", Productroutes)
    .use("/admin", AdminRouter)


export default router