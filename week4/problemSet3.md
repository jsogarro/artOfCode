# Art of Code Problem Set 3
Please submit your completed problem set in a javascript file for our review. The deadline to submit your answers to this problem set is **Monday, February 10th at 6:29 PM**.


## Reading Assignment
Read chapters 12 - 14 of ["Eloquent JavaScript"](http://eloquentjavascript.net/) and complete the following coding exercises and writing assignment.


## Coding Exercises
1) Create a Car constructor function that has make, model, year, color and checkOil properties. If you invoke the Car constructor without passing in a value for the year it should default to the current year. The checkOil property should be set to false by default.

2) Add a blowHorn method to the Car constructor's prototype that will log "Honk! Honk!" To the console when called. Create another method on the Car prototype called updateMileage that when called will increment the car's mileage by a given amount of miles. Create another method called checkOilLight that will set the checkOil property to true if the car has been driven 1,500 miles.

3) Refactor the updateMileage method to turn on the check oil light if the car has 1,500 miles or more on the dash.

4) Create a Dealership constructor that has name, address and cars properties, where cars stores a list of cars in the dealership. Create a method on the Dealership prototype that will read the mileage on a given car.

5) Create an Employee constructor that has name, salary and years properties. Add an employees property to the Dealership constructor that will keep track of the employees.

6) Using the Spotify app in the [examples folder](https://github.com/jsogarro/artOfCode/tree/master/examples), add a method that will retrieve the top tracks and display them on the webpage as an ordered list.  

7) Using the Spotify API get an artist's related artists on the platform and display them to the webpage in the form of an unordered list.

** Hint: For questions 6 and 7 you should use the [API Endpoint Reference](https://developer.spotify.com/web-api/endpoint-reference/) as your guide.**

** Hint 2: You should read the as a refresher of how to create an ordered list [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) and [ordered list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul).**


## Writing Assignment
Using your Medium account write a blog describing what the DOM is, what jQuery is and how we can use it make dynamic websites. Explain what events. Provide an example of an example of how you can add a click event to a button that will alert the message "YES!" when clicked.
