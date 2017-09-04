function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function division(a, b) {
    if (!b) {
        return 'You cannot divide by 0!'
    } else {
        return a / b;
    }
}

function multiplication(a, b) {
    return a * b;
}


export default {
    addition: addition,
    subtraction: subtraction,
    division: division,
    multiplication: multiplication
}
