'use strict';

var str = "this is a new string";
var strArr = str.split(" ");
var reversedArr = [];

for (var i = str.length; i > 0; i--) {
    reversedArr.push(strArr[i]);
}

var reversedString = reversedArr.join(" ");

console.log(reversedString);
