export const validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const validatePassword = (password) => {
    return containsLetter(password) &&
        containsNumber(password) &&
        containsSpecial(password) &&
        password.length >= 8;
};

export const validateRepeatPassword = (password, repeatPassword) => {
    return password === repeatPassword;
}

const containsLetter = value => {
    return value.match(/[a-z]/i);
};

const containsNumber = value => {
    return value.match(/[0-9]/);
};

const containsSpecial = value => {
    return value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/);
};