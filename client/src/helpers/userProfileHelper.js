export const validateUserInput = (field, value) => {
    switch (field) {
        case 'name':
            return true;
        case 'age':
            return parseInt(value) && value > 0 && value <= 120;
        case 'height':
            return parseInt(value) && value > 0 && value <= 300;
        case 'weight':
            return parseInt(value) && value > 0 && value <= 200;
        case 'phone':
            return validateUserInput && value.toString().length == 10;
        case 'gender':
            return true;
        case 'email':
        case 'country':
        case 'city':
            return /^[a-z][a-z\s]*$/i.test(value)
        case 'zipCode':
            return parseInt(value) != NaN;
        case 'gymAccess':
        case 'target':
        case 'languagePref':
            return true;
        default:
            return false;
    }
}