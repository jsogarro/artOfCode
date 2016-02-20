
var lifeGoals = ['bmw', 'ferrari', 'lamborghini'];
var arrayLength = lifeGoals.length;

for (var i = 0; i < arrayLength; i++) {
    console.log(lifeGoals[i]);
}

var str = "a string example";
var strLength = str.length;

for (var i = 0; i < strLength; i++) {
    console.log(str.charAt(i));
    // console.log(str[i]); same result as above
}

$('.btn').on('click', function() {
	console.log('button was clicked!!!');
});

// jQuery.prototype.on = function(x, y);

$('.btn').click(function() {
  $( '#box' ).animate({
    opacity: 0.25,
    right: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });
});