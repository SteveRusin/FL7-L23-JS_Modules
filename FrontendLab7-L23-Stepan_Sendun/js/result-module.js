export function showResult(event, add, sub, div, mult) {
    let target = event.target;
    let firstNumber = parseFloat(document.querySelectorAll('input')[0].value);
    let secondNumber = parseFloat(document.querySelectorAll('input')[1].value);
    let resultBlock = document.getElementById('result');
    let result;

    switch (target.innerHTML) {
        case '+':
            result = add(firstNumber, secondNumber);
            break;
        case '-':
            result = sub(firstNumber, secondNumber);
            break;
        case ':':
            result = div(firstNumber, secondNumber);
            break;
        case '*':
            result = mult(firstNumber, secondNumber);
            break;
        default:
            break;
    }

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        resultBlock.innerHTML = `Fields should not be black`
    } else {
        resultBlock.innerHTML = `${result}`
    }
}
