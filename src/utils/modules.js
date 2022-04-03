// Node modules imports:

const validator = require('email-validator');
const passwordValidator = require('password-validator');

// Name, email and passsword validation: 

const schema = new passwordValidator();

schema
    .is().min(9)

    .has().letters()
    .has().uppercase()
    .has().lowercase()

    .has().digits()
    .has().symbols()

    .has().not().spaces();

export const validateName = (firstName, lastName) => !!firstName && !!lastName;

export const validatePassword = (password) => schema.validate(password);

export const validateEmail = (email) => validator.validate(email);

// Integrating tabindex with the enter key:

export const useTabIndex = () => {

    document.addEventListener('keydown', (event) => {
        try {
            if (event.key === 13) {
                document.activeElement.click();
            }
        } catch(error) {
            console.error(error);
        }
    });

}
