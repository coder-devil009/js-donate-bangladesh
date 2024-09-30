function inputById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNum = parseFloat(inputValue);
    return inputNum;
}

function textById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNum = parseFloat(textValue);
    return textNum;
}