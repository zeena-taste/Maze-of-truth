const levels = [
  // ===== LEVEL 1 =====
  [
    "00000000000G0000000000000",
    "0111011111C11C01111101110",
    "01010100010H010C000101010",
    "0101110111010111010111010",
    "0100000100010000010000010",
    "0101110H010111111H0111110",
    "0101010101010C00010100000",
    "0111010101111101110101110",
    "00000101000C0001010100010",
    "0111110101111101010111110",
    "0100000101000101000000010",
    "0111011101011101011111010",
    "0000010001010001010001010",
    "0111110111011111010101110",
    "0100000100000001010100000",
    "0111010111111101011101110",
    "0000010100000100000100010",
    "0111110111010C11110101110",
    "0000010001010001010101010",
    "0111110111011101010101010",
    "0100010100000101000101000",
    "01110101111111H1110101110",
    "0101000000000100010100010",
    "0101111111111111011111110",
    "000000000F000000000000000"
  ],

  // ===== LEVEL 2 =====
  [
    "00000000000000000000000000000000000",
    "01011111110111111101011111111111010",
    "01010100010001000101010000000101010",
    "01110111011101110111011111011101110",
    "01000001000100010100000001010000010",
    "G1110101011111110101111111011101110",
    "00010101000000000101000000010101000",
    "01011101110111110101110111010101110",
    "0100010001010H0100C0010H01010100000",
    "01110111010101011111110101010111110",
    "0101000101010100H0010001010100C0010",
    "0101110101111101110101110101011101F",
    "01010101000000010100010001010101010",
    "01010101110101110111110111010101110",
    "01010000010101000000000001000100000",
    "01011111111101011111111101110111110",
    "01000000000001010000000100010000010",
    "01110111110111010111110111011111010",
    "00010001000101010000010001000001010",
    "01011111011101011111011101110111010",
    "0100000101000000000101010001010C000",
    "01111101011101111101110101110111110",
    "01000001000101010000000101000000000",
    "01111111010101011111111101111111110",
    "01000000010101000000000000000100010",
    "01011111010111011111110H11110101110",
    "01010001010000000100010100010101000",
    "01110101011111111101110111010101110",
    "00000101010000000001000001010000010",
    "01110111011111011101110111011101110",
    "01010100000001010100010100000101000",
    "01011101111111010111010111010101110",
    "01000000010100000100010001010100010",
    "01011111110101110111111101011111010",
    "01000101000001010000000001000001010",
    "01110101111111011111111101111101110",
    "00010100000000000000000100000100010",
    "01110111111111111111011111010111010",
    "01000000000000000000010001010001010",
    "01111111111111111111110111011111010",
    "00000000000000000000000000000000000"
  ],

  // ===== LEVEL 3 =====
// ===== LEVEL 3 =====
[
"0000000000000000000000000000000000000000000G0",
"011111111111111101111111111111110111010C11110",
"01010001000000000C000001000000010101010100010",
"010101010111011111011111011111010101110111010",
"000101010101010000010000010001010100000001010",
"011101110101110111010101110101111101111111010",
"010001000100000100010101000100000001000000010",
"010111110111011111010111111111011101110101110",
"010000000001000001010000000000010100010101010",
"011111111111011111011111111111010111010101010",
"01000000000001000100000000000C010001010101000",
"011111011101110111011111110111011101111101110",
"000001010101000100000001010100000100000000010",
"011111110111011111111111010111110111010111110",
"010000000000000000000000000001000001010100010",
"011101110111110111111101111111011101110101110",
"000001010100010100000101000000010100010100010",
"011111011101011101011101110111110111110111010",
"010000000001000001010001010100000000000001010",
"010111011111110111110111010101111111110111010",
"010100010001000100000100010101000000010100010",
"010111010101110111011101110111011111010101110",
"010101010100010001010001000001010001010100000",
"010101110101111101010101111101010111010111110",
"010100000101000001010100000101010100000100010",
"010111110101111111011101110111010111110111010",
"010000010100000000010001010000010000010000010",
"01110111011111111101011101C111110111011111010",
"000001000100000001000100000000000101000001010",
"011111011111011101111101111111111101111101110",
"010000010001010000000001000000010001000100010",
"010111111101011101111111110111010111011101110",
"010100000001000101000000000101010100000001000",
"010101111101110111011111011101010101111101110",
"010001000101010000010001010001000101000100010",
"011111011101011111111101011101111101110111010",
"000000010000000000000101000100010000010001010",
"010111110111011101110101011101110111110101110",
"010100000101010101010001010000000C00000100000",
"010101111101110111010111011111110101111111110",
"010100010000000000010100010000010100010000010",
"010101110111011111011101010111110101110111110",
"010101000101010100000001010100000101000100000",
"011111011101110C11111111110111111111011111110",
"0000000000000000000000000000000000000F0000000"

]

];


let currentLevel = 0;
let mazeData = levels[currentLevel];
let mazeCells = [];
let maskOn = false;
let coins = [];
let coinsCollected = 0;
let coinsRequired = 0;

const mazeContainer = document.getElementById("maze");
const playerElement = document.getElementById("player-block");
const CELL_SIZE = 32;

// ===== STATE WINDOW =====
const maskStatusElement = document.getElementById("mask-status");
let levelStatusElement;
let coinStatusElement;

if (document.getElementById("state-window")) {
  levelStatusElement = document.createElement("div");
  levelStatusElement.textContent = `Level: ${currentLevel + 1}`;
  document.getElementById("state-window").appendChild(levelStatusElement);

  coinStatusElement = document.createElement("div");
  coinStatusElement.textContent = "Coins: 0 / 0";
  document.getElementById("state-window").appendChild(coinStatusElement);
}

// ===== MAZE GENERATION =====
function generateMaze() {
  mazeContainer.innerHTML = "";
  mazeContainer.appendChild(playerElement);
  mazeContainer.style.backgroundColor = "#111"; // or dark stone color
  mazeContainer.style.position = "relative";


  mazeCells = mazeData.map(r => r.split(""));
  coins = [];
  coinsCollected = 0;
  coinsRequired = 0;

  mazeContainer.style.gridTemplateColumns =
    `repeat(${mazeData[0].length}, ${CELL_SIZE}px)`;

  mazeData.forEach((row, y) => {
    row.split("").forEach((cell, x) => {
      const div = document.createElement("div");
      div.classList.add("cell");
      div.dataset.x = x;
      div.dataset.y = y;

      // 🧱 WALLS / CLOSED
      if (cell === "0") {
        div.style.backgroundImage = "url('closed.png')";
      }

      // 🚪 EXIT
      else if (cell === "F") {
        if (coinsCollected < coinsRequired) {
          div.style.backgroundImage = "url('closed.png')";
        } else {
          div.style.backgroundColor = "green";
        }
      }

      // 🕶 HIDDEN PATH
      else if (cell === "H") {
        div.style.backgroundImage = maskOn
          ? "url('open.png')"
          : "url('closed.png')";
      }

      // 🌿 OPEN PATHS (TRANSPARENT)
      else {
        div.style.background = "transparent";
      }

      mazeContainer.appendChild(div);

      // 🪙 COINS
      if (cell === "C") {
        coinsRequired++;
        const coin = document.createElement("div");
        coin.classList.add("coin");
        coin.style.position = "absolute";
        coin.style.left = `${x * CELL_SIZE + 6}px`;
        coin.style.top = `${y * CELL_SIZE + 6}px`;
        coin.style.width = "20px";
        coin.style.height = "20px";
        coin.style.backgroundImage = "url('media/coin.jpeg')";
        coin.style.backgroundSize = "cover";
        coin.style.display = maskOn ? "block" : "none";

        mazeContainer.appendChild(coin);
        coins.push({ x, y, element: coin, collected: false });
      }
    });
  });

  coinStatusElement.textContent = `Coins: ${coinsCollected} / ${coinsRequired}`;
}

// ===== PLAYER =====
const player = { x: 0, y: 0 };

function findStart() {
  for (let y = 0; y < mazeData.length; y++) {
    for (let x = 0; x < mazeData[y].length; x++) {
      if (mazeData[y][x] === "G") return { x, y };
    }
  }
  return { x: 1, y: 1 };
}

function spawnPlayer() {
  const start = findStart();
  player.x = start.x;
  player.y = start.y;
  updatePlayerPosition();
}

function updatePlayerPosition() {
  const offset = (CELL_SIZE - 20) / 2;
  playerElement.style.left = `${player.x * CELL_SIZE + offset}px`;
  playerElement.style.top = `${player.y * CELL_SIZE + offset}px`;
}

function canMoveTo(x, y) {
  if (
    y < 0 || y >= mazeCells.length ||
    x < 0 || x >= mazeCells[0].length
  ) return false;

  const cell = mazeCells[y][x];
  if (cell === "0") return false;
  if (cell === "H" && !maskOn) return false;
  if (cell === "F" && coinsCollected < coinsRequired) return false;
  return true;
}

// ===== COINS =====
function checkCoinCollection() {
  coins.forEach(c => {
    if (!c.collected && player.x === c.x && player.y === c.y && maskOn) {
      c.collected = true;
      c.element.remove();
      coinsCollected++;
      coinStatusElement.textContent =
        `Coins: ${coinsCollected} / ${coinsRequired}`;
    }
  });

  if (coinsCollected === coinsRequired) {
    document.querySelectorAll(".cell").forEach(div => {
      const x = +div.dataset.x;
      const y = +div.dataset.y;
      if (mazeCells[y][x] === "F") {
        div.style.backgroundImage = "";
        div.style.backgroundColor = "green";
      }
    });
  }
}

// ===== MASK =====
function updateMaskEffect() {
  coins.forEach(c => {
    if (!c.collected)
      c.element.style.display = maskOn ? "block" : "none";
  });

  document.querySelectorAll(".cell").forEach(div => {
    const x = +div.dataset.x;
    const y = +div.dataset.y;
    if (mazeCells[y][x] === "H") {
      div.style.backgroundImage = maskOn
        ? "url('open.png')"
        : "url('closed.png')";
      div.style.backgroundSize = "cover";
    }
  });

  // ✅ DO NOT REMOVE PLAYER BACKGROUND
  if (maskOn) {
    playerElement.style.backgroundImage = "url('media/bwhite-mask.png')";
    playerElement.style.backgroundSize = "cover";
  } else {
    playerElement.style.backgroundImage = "";
  }
}


// ===== WIN =====
function checkWin() {
  if (
    mazeCells[player.y][player.x] === "F" &&
    coinsCollected >= coinsRequired
  ) {
    currentLevel++;
    if (currentLevel >= levels.length) {
      alert("🎉 You completed all levels!");
      currentLevel = 0;
    }
    mazeData = levels[currentLevel];
    generateMaze();
    spawnPlayer();
    levelStatusElement.textContent = `Level: ${currentLevel + 1}`;
  }
}

// ===== INPUT =====
document.addEventListener("keydown", e => {
  if (e.key.toLowerCase() === "m") {
    maskOn = !maskOn;
    maskStatusElement.textContent = maskOn ? "ON" : "OFF";
    updateMaskEffect();
    return;
  }

  let nx = player.x;
  let ny = player.y;

  if (e.key === "ArrowUp" || e.key === "w") ny--;
  if (e.key === "ArrowDown" || e.key === "s") ny++;
  if (e.key === "ArrowLeft" || e.key === "a") nx--;
  if (e.key === "ArrowRight" || e.key === "d") nx++;

  if (canMoveTo(nx, ny)) {
    player.x = nx;
    player.y = ny;
    updatePlayerPosition();
    checkCoinCollection();
    checkWin();
  }
});

// ===== INIT =====
generateMaze();
spawnPlayer();
