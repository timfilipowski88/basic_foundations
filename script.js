// Basic Foundation I

// #1
function countUp(num) {
    var string = [];
    for (var i = 1; i <=num; i++) {
        string.push(i);
    }
    return string;
} 
var y = countUp(255)
console.log(y)

// #2
function evenOneK() {
    var sum = 0;
    for (var i = 1; i<1001; i++) { 
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}
var evenTotal = evenOneK();
console.log(evenTotal);

// #3
function odd(num) {
    var sum = 0;
    for (var i = 1; i<num; i++) { 
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}
var oddTotal = odd(5000);
console.log(oddTotal);

// #4
function iterateArray(array) {
    var sum =0;
    for (var i=0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
var arrayOne = [1,2,5];
console.log(iterateArray(arrayOne));
var arrayTwo = [-5,2,5,12];
console.log(iterateArray(arrayTwo));

// #5
function findMax(array) {
    var high = 0;
    for (var i = 0; i <array.length; i++) {
        if (array[i] >= high) {
            high = array[i];
        }
    }
    return high;
}

var arrayThree = [-3,3,5,7];
console.log(findMax(arrayThree));

// #6
function findAvg(array) {
    var sum = 0;
    var avg = 0;
    for (var i=0; i < array.length; i++) {
        sum += array[i];
        avg = sum / array.length;
    }
    return avg;
}
var arrayFour = [1,3,5,7,20];
console.log(findAvg(arrayFour));

// #7
function arrayOdd(num1, num2) {
    var arrayFin = [];
    for (var i = num1; i <num2; i++) {
        if (i % 2 != 0) {
            arrayFin.push(i);
        }
    }
    return arrayFin;
}
console.log(arrayOdd(1,50));

// #8
function greatY(array,y) {
    var temp = [];
    for (var i = 0; i<array.length; i++) {
        if (array[i] > y) {
            temp.push(i);
        }
    }
    return temp.length;
}
var arrayEight = [1,3,5,7];
var y = 3;
console.log(greatY(arrayEight,y));

// #9
function squares([array]) {
    var squared = [];
    for(i=0; i<array.length; i++) {
        array[i] = array[i] * array[i];
        squared.push(array[i]);
    }
    return squared;
}
var arrayNine = [1,5,10,-2];
console.log(squares([arrayNine]));

// #10
function zeroNeg([array]) {
    var zeroed = [];
    for (i=0; i<array.length; i++) {
        if (array[i] >= 0) {
            zeroed.push(array[i]); 
        }
        else {
            zeroed.push(0);
        }
    }
    return zeroed;
}
var arrayTen = [1, 5, 10, -2];
console.log(zeroNeg([arrayTen]));

// #11
function mma([array]) {    
    var max = 0;
        for (var i=0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    var min = 0;
    for (var i=0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    var sum = 0;
    var avg = 0;
    for (var i=0; i < array.length; i++) {
        sum += array[i];
        avg = sum / array.length;
    }
    return [max, min, avg];
}
var arrayEleven = [1,5,10,-2]
console.log(mma([arrayEleven]));

// #12 
function swap([array]) {
    var first = array[0];
    var last = array[array.length-1];
    var middle;
    for (var i = 1; i<array.length-1; i++) {
        middle.push(array[i]);
    }
    return [last, middle, first];
}
var arrayTwelve = [1,5,10,-2];
//console.log(swap([arrayTwelve]));

// I can't for the life of me figure this one out. 

// #13
function numToString([array])  {
    var result = [];
    for (var i=0; i<array.length; i++) {
        if (array[i] < 0) {
            result.push("dojo");
        }
        else {
            result.push(array[i]);
        }
    }
    return result;
}
var arrayThirteen = [-1,-3,2];
console.log(numToString([arrayThirteen]));
