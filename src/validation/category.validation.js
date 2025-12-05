import Joi from "joi"

class CategoryValidation {
    create(data) {
        const Category = Joi.object({
            name: Joi.string().min(3).required(),
            description: Joi.string().optional(),
            image: Joi.string().optional()
        });
        return Category.validate(data)
    }

    update(data) {
        const Category = Joi.object({
            name: Joi.string().min(3).optional(),
            description: Joi.string().optional(),
            image: Joi.string().optional()
        });
        return Category.validate(data)
    }
}

export default new CategoryValidation();