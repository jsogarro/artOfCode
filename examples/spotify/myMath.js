// Module
'use strict';

var MyMath = (function() {
    var globalVariable = 'GLOBAL!';

    var factoryObj = {
        PI: 3.14,
        e: 2.718,
        square: function(number) { return number * number; },
        cube: function(number) { return number * number * number; }
    };

    return factoryObj;
})();

let myFunc = () => 1;
let value = myFunc();
console.log('fat arrow return value:', value);
