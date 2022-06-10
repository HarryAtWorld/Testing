
const unitLength = 13;
const boxColor = 60;
const strokeColor = 200;
let columns; /* To be determined by window width */
let rows;    /* To be determined by window height */
let currentBoard;
let nextBoard;
let isGameStart = false
let heightLightColor = [220, 20, 0]
let shadowReduceRate = 3
let shadowStartColor = 150
let gameRound = 1
let statusDisplay = document.querySelector('#gameStatus')


function setup() {
    // Setup logic here    

    const canvas = createCanvas(Math.round((windowWidth *0.75) / 10) * 10, Math.round((windowHeight *0.9) / 10) * 10);
    // const canvas = createCanvas(windowWidth-50 , windowHeight-50);
    canvas.parent(document.querySelector('#canvas'));
    background(255);

    columns = floor(width / unitLength);
    rows = floor(height / unitLength);


    currentBoard = [];
    nextBoard = [];
    for (let i = 0; i < columns; i++) {
        currentBoard[i] = [];
        nextBoard[i] = [];

    }

    initGame();
    updateUI();
    statusDisplay.innerHTML = `Generation: ${gameRound}&emsp;&emsp;&emsp;&emsp;&emsp; Area: ${columns}px &#935; ${rows}px`;
}

function draw() {
    // draw logic here
    if (isGameStart) {
    } else {
        return
    }

    generate();

    updateUI()

    if(gameRound % 20 == 0){
        randomStellar()
    }  

    statusDisplay.innerHTML = `Generation: ${gameRound}&emsp;&emsp;&emsp;&emsp;&emsp; Area: ${columns}px &#935; ${rows}px`;

    gameRound++

}

//
function updateUI() {

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
           

            stroke(strokeColor);
            if(currentBoard[i][j][1] === shadowStartColor){
                fill(color(heightLightColor))

            } else{
                fill(currentBoard[i][j][1]);
            }
            

            rect(i * unitLength, j * unitLength, unitLength, unitLength);
        }
    } 
}



function initGame() {
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            currentBoard[i][j] = [0, 255];
            nextBoard[i][j] = [0,255];
        }
    }
}

function generate() {
    //Loop over every single box on the board
    for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
            // Count all living members in the Moore neighborhood(8 boxes surrounding)
            let neighbors = 0;
            for (let i of [-1, 0, 1]) {
                for (let j of [-1, 0, 1]) {
                    if (i == 0 && j == 0) {
                        // the cell itself is not its own neighbor
                        continue;
                    }
                    // The modulo operator is crucial for wrapping on the edge
                    neighbors += currentBoard[(x + i + columns) % columns][(y + j + rows) % rows][0];
                }
            }

            // Rules of Life
            if (currentBoard[x][y][0] == 1 && neighbors < 2) {
                // Die of Loneliness
                nextBoard[x][y][0] = 0;
                nextBoard[x][y][1] += shadowReduceRate                
                
            } else if (currentBoard[x][y][0] == 1 && neighbors <= 3) {
                // Stasis
                nextBoard[x][y][0] = 1;
                nextBoard[x][y][1] = shadowStartColor;                

            } else if (currentBoard[x][y][0] == 1 && neighbors > 3) {
                // Die of Overpopulation
                nextBoard[x][y][0] = 0;
                nextBoard[x][y][1] += shadowReduceRate                

            } else if (currentBoard[x][y][0] == 0 && neighbors == 3) {
                // New life due to Reproduction
                nextBoard[x][y][0] = 1;
                nextBoard[x][y][1] = shadowStartColor;
                
            } else {
                // Stasis
                nextBoard[x][y][0] = currentBoard[x][y][0];
                nextBoard[x][y][1] = currentBoard[x][y][1] + shadowReduceRate ;
                // if( currentBoard[x][y][1]<250){
                //     currentBoard[x][y][1] =+ 25
                // }else{
                //     currentBoard[x][y][1] =255
                
            }
        }
    }

    // Swap the nextBoard to be the current Board
    [currentBoard, nextBoard] = [nextBoard, currentBoard];

    // for (let x = 0; x < columns; x++) {
    //     for (let y = 0; y < rows; y++) {
    //         currentBoard[x][y][0] = (nextBoard[x][y][0]);
    //         currentBoard[x][y][1] = (nextBoard[x][y][1]);

    //     }
    // }

}



function mousePressed() {
    isGameStart = false;
    // noLoop();
    mouseDragged();
}

function mouseReleased() {
    isGameStart = true;
    // loop();
}

function mouseDragged() {
    /**
     * If the mouse coordinate is outside the board
     */
    if (mouseX > unitLength * columns || mouseY > unitLength * rows) {
        return;
    }
    const x = Math.floor(mouseX / unitLength);
    const y = Math.floor(mouseY / unitLength);

    currentBoard[x][y][0] = 1;
    currentBoard[x][y+1][0] = 1;
    currentBoard[x][y-1][0] = 1;


    // for (let i of [-1, 0, 1]) {
    //     for (let j of [-1, 0, 1]) {
    //         if(Math.abs(i) === Math.abs(j) ){
    //         } else{
    //             currentBoard[x + i][y + j][0] = 1;
    //         }  
    //     }
    // }


    fill(color(heightLightColor));    
    stroke(strokeColor);
    
    // for (let i of [-1, 0, 1]) {
    //     for (let j of [-1, 0, 1]) {            
    //         if(Math.abs(i) === Math.abs(j) ){
    //         } else{
    //             rect((x + i) * unitLength, (y + j) * unitLength, unitLength, unitLength);
    //         }
    //     }
    // }

    rect(x * unitLength, y* unitLength, unitLength, unitLength); 
    rect(x * unitLength, (y+1)* unitLength, unitLength, unitLength); 
    rect(x * unitLength, (y-1)* unitLength, unitLength, unitLength); 

}

function randomStellar() {

    //random location to add stellar

    let randomX = floor(Math.random()*columns)+ 1;
    let randomY = floor(Math.random()*columns)+ 1;

    currentBoard[randomX % columns][(randomY+2) % rows][0] = 1;
    currentBoard[(randomX+1) % columns][randomY % rows][0] = 1;
    currentBoard[(randomX+1) % columns][(randomY+2) % rows][0] = 1;
    currentBoard[(randomX+2) % columns][(randomY+1) % rows][0] = 1;
    currentBoard[(randomX+2)% columns][(randomY+2) % rows][0] = 1;

    fill(color(heightLightColor));    
    stroke(strokeColor);

    rect((randomX % columns) * unitLength, ((randomY+2)% rows)* unitLength, unitLength, unitLength); 
    rect(((randomX+1)% columns) * unitLength, (randomY % rows)* unitLength, unitLength, unitLength); 
    rect(((randomX+1)% columns) * unitLength, ((randomY+2)% rows)* unitLength, unitLength, unitLength);
    rect(((randomX+2)% columns) * unitLength, ((randomY+1)% rows)* unitLength, unitLength, unitLength);
    rect(((randomX+2)% columns) * unitLength, ((randomY+2)% rows)* unitLength, unitLength, unitLength);


}




let startButton = document.querySelector('#start');
startButton.addEventListener("click", () => {
    isGameStart = true;
})

let pauseButton = document.querySelector('#pause');
pauseButton.addEventListener("click", () => {
    isGameStart = false;
})

let resetButton = document.querySelector('#reset');
resetButton.addEventListener("click", () => {
    isGameStart = false;
    initGame();
    updateUI();
})