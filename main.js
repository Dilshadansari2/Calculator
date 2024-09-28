function appendToDisplay(value){
    document.getElementById('input').value += value;
}

function clearDisplay(){
    document.getElementById('input').value = '';
}

function deleteLast(){
    let value = document.getElementById('input').value;
    document.getElementById('input').value = value.substring(0, value.length - 1);
}

function calculate(){
    let input = document.getElementById('input').value;
    let result = eval(input);
    document.getElementById('input').value = result;
}