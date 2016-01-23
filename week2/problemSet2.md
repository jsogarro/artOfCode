# Art of Code - Problem Set 2
Please submit your completed problem set through Github using the instructions we will cover in class this week. The deadline to submit your answers to this problem set is **Monday January 25th at 6:30 PM**.

## Coding Exercises
1) Write a Player constructor function that has username, score and highScore properties. Add an updateScore method that will increment a player's score when called and update the highScore property if the score is greater than the current high score.

2) Add a gameOver method to your Player class that will reset the user's score.

3) Add a lives property and subtractLife and addLife methods that will increment or decrement a player's lives. A new player should start off with 3 lives.

4) Create a function called GameController that takes a Player as an argument along with a guess (in this case it will be any number from 1 - 10). When your function is called it should generate a random number from 1 - 10 and give the user 10 points for every correct answer. If the guess is incorrect then the user will lose a life. When a user has zero lives left this function will log "Game Over!" to the console and reset the user's score.

5) Add a editUserName method to your Player constructor that will allow the user to update their user name.

Bonus: If the user gets three guesses correct in a row award them an extra life!

Bonus: Add a way for the GameController to keep track of the high score of all players in the game.

## Writing Assignment
Write a blog post detailing your solutions to the exercises in the code challenges section above.
