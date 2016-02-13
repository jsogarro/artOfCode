# Art of Code Problem Set 3
Please submit your completed problem set in a javascript file for our review. The deadline to submit your answers to this problem set is **Saturday, February 15th at 11:59 PM**.

## Reading Assignment
Read chapters 12 - 14 of ["Eloquent JavaScript"](http://eloquentjavascript.net/) and complete the following coding exercises and writing assignment.


## Coding Exercises
1) Create a Car constructor function that has make, model, year, color and checkOil properties. If you invoke the Car constructor without passing in a value for the year it should default to the current year. The checkOil property should be set to false by default.

2) Add a blowHorn method to the Car constructor's prototype that will log "Honk! Honk!" To the console when called. Create another method on the Car prototype called updateMileage that when called will increment the car's mileage by a given amount of miles. Create another method called checkOilLight that will set the checkOil property to true if the car has been driven 1,500 miles.

3) Refactor the updateMileage method to turn on the check oil light if the car has 1,500 miles or more on the dash.

4) Create a Dealership constructor that has name, address and cars properties, where cars stores a list of cars in the dealership. Create a method on the Dealership prototype that will read the mileage on a given car.

5) Create an Employee constructor that has name, salary and years properties. Add an employees property to the Dealership constructor that will keep track of the employees.

6) In the Statics example (examples/stats) we did in class on Wednesday modify the code to calculate the sum, min, max and range of items in the array and display it to webpage. Look at the average example we did in class for guidance.

7) Create a function called "mode," which will find the number in the user's input that appears the most. You should display the mode value to the screen.

## Writing Assignment
Using your Medium account write a blog describing what the DOM is, what jQuery is and how we can use it make dynamic websites. Explain what events are. Provide an example of how you can add a click event to a button that will alert the message "YES!" when clicked.
