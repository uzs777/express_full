import Joi from "joi";

class productValidator {
    create(data) {
        const products = Joi.object({
            name: Joi.string().min(3).required(),
            description: Joi.string().optional(),
            price: Joi.number().min(1).required(),
            quantity: Joi.number().min(1).required(),
            categoryId: Joi.string().hex().length(24).required()
        });
        return products.validate(data)
    }

    update(data) {
        const products = Joi.object({
            name: Joi.string().min(3).optional(),
            description: Joi.string().optional(),
            price: Joi.number().min(1).optional(),
            quantity: Joi.number().min(1).optional(),
            categoryId: Joi.string().hex().length(24).optional()
        });
        return products.validate(data)
    }
}

export default new productValidator();