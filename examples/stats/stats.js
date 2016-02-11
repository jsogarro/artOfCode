(function() {
    var factoryObj = {};

    factoryObj.sumOfNumbers = sumOfNumbers;
    factoryObj.sumOfArray = sumOfArray;
    factoryObj.averageOfArray = averageOfArray;
    factoryObj.max = max;
    factoryObj.min = min;
    factoryObj.rangeOfArray = rangeOfArray;

    window.Stats = factoryObj;

    // Write a function that will find the sum of all multiples of 3 or 5 below a given number. Assuming that we're starting the count from 1.

    function sumOfNumbers(number) {
        var sum = 0;

        for (var i = 1; i <= number; i++) {
            if (i % 5 === 0 || i % 3 === 0) {
                sum += i;
            }
        }

        return sum;
    }

    // Write a function that takes an array of numbers and returns the average of all of the numbers in the array.
    function sumOfArray(array) {
        var sum = 0;

        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return sum;
    }

    function averageOfArray(array) {
        var sum = sumOfArray(array);

        var average = sum / array.length;

        return average;
    }

    // Write a two additional functions that will find the largest and the smallest number in an array.
    function max(array) {
        var max = 0;

        for (var i = 0; i < array.length; i++) {
            if(array[i] > max) {
                max = array[i];
            }
        }

        return max;
    }


    function min(array) {
        var min;

        for (var i = 0; i <= array.length; i++) {
            if (i === 0) {
                min = array[i];
            }

            if(array[i] < min) {
                min = array[i];
            }
        }

        return min;
    }

    // Write yet another function that will return the range of numbers in an array.
    function rangeOfArray(array) {
        var maxNum = max(array);
        var minNum = min(array);
        var range = maxNum - minNum;

        return range;
    }

// Find the median of an array of numbers

})(document, window);
