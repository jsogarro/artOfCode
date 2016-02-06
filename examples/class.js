// Question 1 Solution
function Player (userName) {
    this.userName = userName ;
    this.score = 0;
    this.highScore = 0;
    this.lives = 3;
}

Player.prototype.updateScore = function () {
    this.score += 10; // award the player 10 points

    if (this.score > this.highScore) {
        this.highScore = this.score;
    }
}

Player.prototype.gameOver = function () {
    this.score = 0;
    console.log('Game Over!');
}

Player.prototype.subtractLife = function () {
    this.lives--;
}

Player.prototype.addLife = function () {
    this.lives++;
}

Player.prototype.editUserName = function(newUserName) {
    this.userName = newUserName;
}

function GameController (player) {
    this.player = player;
    this.ultimateHighScore;
    this.correctAnswersInARow = 0;
}

GameController.prototype.checkGuess = function (guess) {
    var random = Math.random() * (10 -  1) + 1;
    var correctAnswer = Math.round(random);

    if (guess === correctAnswer) {
        this.player.updateScore();
        this.correctAnswersInARow++;
        this.bonusLife();
    } else if (this.player.lives > 0) {
        this.player.subtractLife();
        this.correctAnsers = 0;
    } else {
        this.player.gameOver();

        // keep track of ultimate high score
        if (this.player.score > this.ultimateHighScore) {
            this.ultimateHighScore = this.player.score;
        }
    }
}

GameController.prototype.bonusLife = function () {
    if (this.correctAnswersInARow % 3) {
        this.player.addLife();
    }
}
