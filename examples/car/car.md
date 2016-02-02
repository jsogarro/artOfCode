Create a Car constructor function that has make, model, year, color and checkOil properties. If you invoke the Car constructor without passing in a value for the year it should default to the current year. The checkOil property should be set to false by default.

Add a blowHorn method to the Car constructor's prototype that will log "Honk! Honk!" To the console when called. Create another method on the Car prototype called updateMileage that when called will increment the car's mileage by a given amount of miles. Create another method called checkOilLight that will set the checkOil property to true if the car has been driven 1,500 miles.

Refactor the updateMileage method to turn on the check oil light if the car has 1,500 miles or more on the dash.
