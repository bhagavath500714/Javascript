const canvas = document.getElementById('canvas');
// console.log(canvas);
const ctx = canvas.getContext('2d')

// ctx.beginPath()
// ctx.rect(10,10,40,40)
// ctx.fillStyle = "blue"
// ctx.fill()
// ctx.stroke()
// ctx.closePath()

const canvasH = canvas.height
const canvasW = canvas.width

let rightPressed = false
let leftPressed = false
let x, y, dy, dx, interval, radius, paddleW, paddleX, paddleY, brickW, brickH, brickOffset // global variables
let bricks = []
let score = 0

setVariables()
drawBall()
drawPaddle()
paddleNavigation()
createBrickArray()
drawBricks()
drawScore()
// startGame()

function drawScore() {
    ctx.beginPath()
    ctx.fillStyle = '#000'
    ctx.fill()
    ctx.fillText("Score: " + score, 9, 10)
    ctx.closePath() 
}

function createBrickArray() {
    for (let j = 0; j < 3; j++) {
        bricks[j] = []
        for (let i=0; i< 12; i++) {
            bricks[j][i] = {x: 0,y: 0, isVisible:true}
        } 
    }

}

function drawBricks() {
   // ctx.beginPath()
    // ctx.rect(10, 10, brickW, 10)
    // ctx.fillStyle = 'blue'
    // ctx.fill()
    // ctx.closePath()

    for (let j = 0; j < 3; j++) {
        for (let i=0; i< 12; i++) {
            if(bricks[j][i].isVisible){
                const brickX = 10 + i * (brickW + brickOffset)
                const brickY = (10+brickOffset) * (j+1)
                bricks[j][i].x = brickX
                bricks[j][i].y = brickY
                ctx.beginPath()
                ctx.rect(brickX, brickY, brickW, brickH)
                ctx.fillStyle = 'blue'
                ctx.fill()
                ctx.closePath()
            }
        } 
    }
    console.log(bricks);
}

function paddleNavigation() {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    function handleKeyDown(e) {
        if(e.key === "ArrowRight") {
            // console.log(e.key);
            rightPressed = true
        }
        if(e.key === "ArrowLeft") {
            leftPressed = true
        }
    }

    function handleKeyUp(e) {
        if(e.key === "ArrowRight") {
            rightPressed = false
        }
        if(e.key === "ArrowLeft") {
            leftPressed = false
        }
    }
}

function detectCollision() {
    if(x + dx >= canvasW || x + dx < 0) {
        dx = -dx
    }

    if( y + dy > canvasH - radius ) {
        if(x + dx > paddleX && x + dx < (paddleX + paddleW)) {
            dy = -dy
            dx = dx + (x + dx- paddleX)/100
        }
    }

    if( y + dy < 0) {
        dy = -dy
    }

    for (let b = 0; b < bricks.length; b++) {
        // console.log(b);
        // console.log(bricks[b]);
        for (let i = 0; i < bricks[b].length; i++) {
            // console.log(bricks[b][i]);
            // console.log(brick);
            const brick = bricks[b][i]
            if(brick.isVisible){
                if(x > brick.x && x < (brick.x + brickW) && y > brick.y && y < brick.y + brickH) {
                    bricks[b][i].isVisible = false
                    score += 1
                    dy = -dy
                    checkYouWon()
                }
            }
        }
    }
}

function startGame() {
    if(!interval){
        interval = setInterval(() => {
            if(rightPressed) {
                paddleX = paddleX + 5 
            }
    
            if(leftPressed) {
                paddleX = paddleX - 5
            }
        
            detectCollision()
            x = x + dx
            y = y + dy
            checkGameOver()
            ctx.clearRect(0,0,canvasW,canvasH)
            drawBall()
            drawPaddle()
            drawBricks()
            drawScore()
        
        }, 20);
    }
}

function checkGameOver() {
    if(y === canvasH){
        alert('game over')
        clearInterval(interval)
        interval = null
        setVariables()
    }
}

function checkYouWon() {
    if(score === 36){
        alert('you won !!')
        clearInterval(interval)
        interval = null
        setVariables()
    }
}

function setVariables() {
    x = canvasW/2
    y = canvasH - 20
    dx = 5
    dy = -5
    radius = 10
    paddleW = 150
    paddleX = canvasW/2 - paddleW/2
    paddleY = canvasH - 10
    brickW = 40
    brickH = 10
    brickOffset = 9
}

function drawBall() {
    ctx.beginPath()
    ctx.arc(x,y,radius,0,2* Math.PI,false)
    ctx.fillStyle = "blue"
    ctx.fill()
    ctx.closePath()
}

function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddleX, paddleY, paddleW, 10)
    ctx.fillStyle = "blue"
    ctx.fill()
    ctx.closePath()
}