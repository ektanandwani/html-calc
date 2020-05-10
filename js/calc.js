var answered = false;
function append(exp){
    if (answered == false) {
        var expression = document.getElementsByName("expr")[0];
        expression.value = expression.value + exp.innerText;
        answered = false;
        return expression.value;
    } else {
        var expression = document.getElementsByName("expr")[0];
        expression.value = '';
        expression.value = expression.value + exp.innerText;
        answered = false;
        return expression.value;
    }

}
function getAnswer() {
    var expression = document.getElementsByName("expr")[0];
    var ans;
    try {
        ans = eval(expression.value);
        if (isNaN(ans)) {
            expression.value = 'ERROR';
            answered = true;
            return expression.value;
        } else {
            expression.value = ans;
            answered = true;
            return expression.value;
        }
    } catch (e) {
        expression.value  = 'ERROR';
        answered = true;
        return expression.value;
    }
}
function clear() {
    var expression = document.getElementsByName("expr")[0];
    expression.value = '';
    return expression.value;
}

function back() {
    var expression = document.getElementsByName("expr")[0];
    expression.value = expression.value.slice(0,-1);
    return expression.value;
}
