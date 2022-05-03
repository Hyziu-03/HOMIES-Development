// Node modules imports:

const validator = require('email-validator');
const passwordValidator = require('password-validator');

// Name, email and password validation rules:

export const validateName = (firstName, lastName) => !!firstName && !!lastName;
export const validatePassword = (password) => schema.validate(password);
export const validateEmail = (email) => validator.validate(email);

// Name, email and passsword validation functions: 

const schema = new passwordValidator();

schema
    .is().min(9)
    .has().letters()
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().symbols()
    .has().not().spaces();

export const validateCredentials = (nameRule, emailRule, passwordRule, permissions) => {
    try {
        if (nameRule) {
            if (emailRule) {
                if (passwordRule) {
                    if (permissions) {
                        return true;
                    } else {
                        console.error('Nie zaakceptowano regulaminu i polityki prywatności')
                    }
                } else {
                    console.error('Nieprawidłowe hasło')
                }
            } else {
                console.error('Nieprawiłowy adres email lub hasło');
            }
        } else {
            console.error('Nieprawdiłowe imię lub nazwisko lub pusty formularz');
        }
        return false;
    } catch (error) {
        console.error(error);
    }
}

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
