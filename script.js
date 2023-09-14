const leftPaddle = document.getElementById("leftPaddle");
const rightPaddle = document.getElementById("rightPaddle");
const ball = document.getElementById("ball");

const paddleSpeed = 5;
const ballSpeed = 5;

let leftPaddleY = 150;
let rightPaddleY = 150;
let ballX = 400;
let ballY = 200;
let ballXSpeed = ballSpeed;
let ballYSpeed = ballSpeed;

function updateGame() {
    // Move paddles
    if (leftPaddleY > 0 && rightPaddleY > 0) {
        if (leftPaddleY < 300 && rightPaddleY < 300) {
            leftPaddleY += ballYSpeed;
            rightPaddleY += ballYSpeed;
        }
    }

    leftPaddle.style.top = leftPaddleY + "px";
    rightPaddle.style.top = rightPaddleY + "px";

    // Move ball
    ballX += ballXSpeed;
    ballY += ballYSpeed;

    // Ball collision with top and bottom walls
    if (ballY <= 0 || ballY >= 380) {
        ballYSpeed = -ballYSpeed;
    }

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";

    // Ball collision with paddles
    if (ballX <= 30 && ballY >= leftPaddleY && ballY <= leftPaddleY + 100) {
        ballXSpeed = -ballXSpeed;
    }
    if (ballX >= 750 && ballY >= rightPaddleY && ballY <= rightPaddleY + 100) {
        ballXSpeed = -ballXSpeed;
    }

    // Ball out of bounds
    if (ballX < 0 || ballX > 780) {
        // Reset ball position
        ballX = 400;
        ballY = 200;
        ballXSpeed = ballSpeed;
        ballYSpeed = ballSpeed;
    }
}

document.addEventListener("keydown", function(event) {
    // Move paddles up and down using arrow keys
    if (event.key === "ArrowUp") {
        if (rightPaddleY > 0) {
            rightPaddleY -= paddleSpeed;
        }
    } else if (event.key === "ArrowDown") {
        if (rightPaddleY < 300) {
            rightPaddleY += paddleSpeed;
        }
    }
    rightPaddle.style.top = rightPaddleY + "px";
});

// Start the game loop
setInterval(updateGame, 1000 / 60);
