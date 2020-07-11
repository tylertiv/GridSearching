
// DECLARING CONSTANTS
const BOX = 25;                             // size of each box
const CANVAS_FULL = 750;                    // full canvas including bordering wall
const CANVAS_SIZE = CANVAS_FULL - 2*BOX;    // "usable" canvas area, takes off one box on each side for bordering wall
const GRID_SIZE = CANVAS_FULL / BOX;

const canvas = document.getElementById("canvas");;
const ctx = canvas.getContext("2d");
const colorMap = ["white", "black", "green", "red"];

let start;
let goal;
let grid = new Array(GRID_SIZE); 

// Initialize canvas and create start and endpoint
function setUp( ) {
    // draw bordering walls
    for(let i = 0; i < GRID_SIZE; i++){
        grid[i] = new Array(GRID_SIZE);
    }

    for(let x = 0; x < GRID_SIZE; x++) {
        grid[0][x] = 1;
        grid[GRID_SIZE - 1][x] = 1;

        grid[x][0] = 1;
        grid[x][GRID_SIZE - 1] = 1;
    }

    // draw individual boxes on canvas
    for(let x = 1; x <= (CANVAS_SIZE / BOX); x++) {
       for(let y = 1; y <= (CANVAS_SIZE / BOX); y++){
            grid[x][y] = (Math.random() < 0.3) ? 1 : 0;
        }
    }

    // set up start and end points (will be randomized later)
    console.table(grid);
    start = {x: 5, y: 10}
    grid[start.x][start.y] = 2;

    goal = {x: 25, y: 20};
    grid[goal.x][goal.y] = 3;

    for(let i = 0; i < GRID_SIZE; i++) {
        for(let j = 0; j < GRID_SIZE; j++){
            ctx.fillStyle = colorMap[grid[i][j]];
            ctx.fillRect(i*BOX, j*BOX, BOX, BOX);
            ctx.strokeStyle = "black";
            ctx.strokeRect(i*BOX, j*BOX, BOX, BOX);
        }
    }
    
}

let directions = []
function dfs() {
    stack = [];

}

setUp();