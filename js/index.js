// alert('Hello World');

function prn(msg) {
    document.write(msg + '<br>');
}

// var cars = ['BMW x5', 'Ferrari F430', 'Zaz Sens'];
// prn(cars.length);
// cars[30] = 'Toyota LC200';
// prn(cars.length);
// prn(cars[0]);

// cars.push('Audi Q5');
// prn(cars.length);
// prn('Unexisting index');
// prn(cars[10]);

// // for (var i = 0; i < cars.length; i++){
// //     prn(cars[i]);
// // }
// cars.forEach(function (el) {
//     prn(el);
// });


// var carYears = {
//     'Ferarri F430': 2010,
//     'Zas Sens': 1991,
//     'Toyota LC200': 2010
// };

// carYears['BMW X5'] = 2015;
// // prn(carYears.length); НЕ КОРЕКТНО
// // prn('Toyota LC200:' + carYears['Toyota LC200']);
// //  var counter = 0;
//  for (var key in carYears) {
//     //  counter ++;
//     prn(key+': '+ carYears[key]);
//  }
// //  prn(counter);


var ferrari = {};

function seyName() {
    return ('I am ' + this.name + ' from '+ this.year);
}

ferrari.name = 'Ferarri F430';
ferrari.year = 2010;
ferrari.sey = seyName;

var toyota = {
    name: 'Toyota LC200',
    year: 2011,
    sey: seyName
}
 prn(ferrari.name);
 prn(toyota.name);
 prn(ferrari.sey());
 prn(toyota.sey());

function Car(name, year) {
    this.name = name;
    this.year = year;
    this.sey = seyName;
    return this;
}

var sens = new Car('Zas Sans', 1999);
prn(sens.sey());

var jeep = new Car('Jeep Cheroki', 2017);
prn(jeep.sey());






















// function isPrime(num) {
//     for (var i = 2; i<num; i++){
//         if ((num % i) === 0){
//             return false;
//         }
//     }
//     return true;
// }
// // for (var i = 100; i > 0; i-=1) {
// //     if (isPrime(i)) {
// //         prn(i);
// //     }
// // }

// var i = 100;
// while ( i > 0) {
//     if (isPrime(i)) {
//         prn(i);
//     }
//     i--;
// }









/*var x = Number(prompt('введіть значення Х'));
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
}*/