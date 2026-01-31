window.addEventListener("load", () => {

    let maskOn = false;
    let treasures = [];
    let treasuresCollected = 0;

    const maskStatusElement = document.getElementById("mask-status");
    const mazeContainer = document.getElementById("maze");

    // Check DOM elements
    if (!mazeContainer || !maskStatusElement) {
        console.error("Maze or state window elements not found!");
        return;
    }

    // Create treasures counter
    let treasuresStatusElement;
    if (document.getElementById("state-window")) {
        treasuresStatusElement = document.createElement("div");
        treasuresStatusElement.id = "treasures-status";
        treasuresStatusElement.textContent = `Treasures: ${treasuresCollected}`;
        document.getElementById("state-window").appendChild(treasuresStatusElement);
    }

    // ===== TREASURE CONFIG =====
    function getTreasureCountForLevel(level) {
        return 3 + level * 2;
    }

    function spawnTreasures() {
        removeTreasures();
        const count = getTreasureCountForLevel(currentLevel);
        treasures = [];

        for (let i = 0; i < count; i++) {
            let pos;
            let attempts = 0;
            do {
                const x = Math.floor(Math.random() * mazeData[0].length);
                const y = Math.floor(Math.random() * mazeData.length);
                pos = { x, y };
                attempts++;
                if (attempts > 100) break;
            } while (
                mazeCells[pos.y][pos.x] !== "1" ||
                treasures.some(t => t.x === pos.x && t.y === pos.y)
            );

            const div = document.createElement("div");
            div.classList.add("treasure");
            div.style.width = "24px";
            div.style.height = "24px";
            div.style.backgroundImage = "url('treasure.jpeg')";
            div.style.backgroundSize = "cover";
            div.style.position = "absolute";
            div.style.left = `${pos.x * 32 + 4}px`;
            div.style.top = `${pos.y * 32 + 4}px`;
            div.style.zIndex = "95";
            mazeContainer.appendChild(div);

            treasures.push({ x: pos.x, y: pos.y, element: div });
        }
    }

    function removeTreasures() {
        treasures.forEach(t => mazeContainer.removeChild(t.element));
        treasures = [];
    }

    // ===== MASK TOGGLE =====
    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === "m") {
            maskOn = !maskOn;
            maskStatusElement.textContent = maskOn ? "ON" : "OFF";
            console.log("Mask toggled:", maskOn ? "ON" : "OFF");

            if (maskOn) spawnTreasures();
            else removeTreasures();
        }
    });

    // ===== CHECK COLLECTION =====
    function checkTreasureCollection() {
        for (let i = treasures.length - 1; i >= 0; i--) {
            if (player.x === treasures[i].x && player.y === treasures[i].y) {
                mazeContainer.removeChild(treasures[i].element);
                treasures.splice(i, 1);
                treasuresCollected++;
                if (treasuresStatusElement)
                    treasuresStatusElement.textContent = `Treasures: ${treasuresCollected}`;
                console.log(`Treasure collected! Total: ${treasuresCollected}`);
            }
        }
    }

    // ===== HOOK INTO PLAYER MOVEMENT =====
    const originalKeyDown = document.onkeydown;
    document.addEventListener("keydown", (e) => {
        if (!player) return;
        // Call your existing movement logic first
        if (typeof originalKeyDown === "function") originalKeyDown(e);

        // Then check treasures if mask is on
        if (maskOn) checkTreasureCollection();
    });
});
