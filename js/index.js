// alert('Hello World');

var x = Number(prompt('введіть значення Х'));
var y = Number(prompt('введіть значення Y'));
var c = Number(prompt('введіть значення C'));

var result = userCalc();

document.write(result);

function userCalc(){
    var b = x + y - c;
    var d = b + y -c;
    var u = d - x +c;
    var result = 'Ваш резулбьаь ' + u;
    return result;
}