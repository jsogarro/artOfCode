var resultElement = document.getElementById('result');
var button = document.getElementById('average-button');
button.addEventListener('click', updateAverageDisplay);

// Method that will update the display
function updateAverageDisplay () {

    // Grabe the value that a user types into the input
    var numberString = document.getElementById('input-id').value;

    // Convert the string value of the numbers into an array
    var numberArray = numberString.split(",");

    // Convert the string versions of the numbers into actuall numbers
    numberArray = numberArray.map(function(stringNumber) {
        return parseInt(stringNumber, 10);
    });

    // Use our stats module to find the average of those numbers
    var average = Stats.averageOfArray(numberArray);

    // Write the average to the element that will display the average
    resultElement.innerHTML = average;
}
