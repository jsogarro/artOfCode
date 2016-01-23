// Question 1 Solution
function Player (userName) {
    this.userName = userName ;
    this.score = 0;
    this.highScore = 0;
}

Player.prototype.updateScore = function () {
    this.score++;

    if (this.score > this.highScore) {
        this.highScore = this.score;
    }
}

// Question 5
Player.prototype.editUserName = function(newUserName) {
    this.userName = newUserName;
}
