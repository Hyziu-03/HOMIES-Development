const validator = require("email-validator");
const passwordValidator = require('password-validator');

const schema = new passwordValidator();
const passwordSchema = schema.is().min(9).has().letters().has().uppercase().has().lowercase().has().digits().has().symbols().has().not().spaces();

export const validateName = (firstName, lastName) => !!firstName && !!lastName;
export const validatePassword = (password) => passwordSchema.validate(password);
export const validateEmail = (email) => validator.validate(email);

export const useTabIndex = () => {

    document.addEventListener('keydown', (event) => {

        if (event.key === 13) {
            document.activeElement.click();
        }

    });

}
