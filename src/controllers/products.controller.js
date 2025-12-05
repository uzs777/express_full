import Products from "../model/products.js";
import { BaseController } from "./base.controller.js";

class productsController extends BaseController {
}

export default new productsController(Products, 'category')