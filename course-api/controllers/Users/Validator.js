const joi = require(`joi`)
const { validate } = require("../../models/UserModel")

const Validator = {
    registerValidator: data => {
        const validateSchema = joi.object({
            fullname: joi.string()
                .min(6)
                .required(),
            username: joi.string()
                .min(6)
                .required(),
            email: joi.string()
                .min(6)
                .required()
                .email(),
            phone: joi.string()
                .pattern(new RegExp('^[0-9]{8}$')),
            password: joi.string()
                .min(6)
                .required()
        })

        return validateSchema.validateAsync(data)
    },
    loginValidator: data => {
        const validateSchema = joi.object({
            username: joi.string()
                .min(6),
            email: joi.string()
                .min(6)
                .email(),
            password: joi.string()
                .min(6)
                .required()
        })

        return validateSchema.validateAsync(data)
    },
}

module.exports = Validator