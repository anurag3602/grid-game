const container = document.querySelector(".container");
const input = document.getElementById("input");


container.style.gap = "0";
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.style.boxSizing = "border-box";
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const value = parseInt(input.value, 10);
        if (isNaN(value) || value <= 0 || value > 15) {
            alert("Please enter a number between 1 and 15.");
            input.value = "";
            return;
        }
        input.style.display = "none";
        container.classList.add("active");
        container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
        container.innerHTML = "";

        for (let i = 0; i < value; i++) {
            for (let j = 0; j < value; j++) {
                const box = document.createElement("div");
                box.classList.add("box");
                box.dataset.row = i;
                box.dataset.col = j;
                container.appendChild(box);
            }
        }
    }
});

container.addEventListener("click", (event) => {
    const item = event.target;
    if (!item.classList.contains("box")) return;

    if (item.style.background === "lightgreen" || item.style.background === "grey") {
        return;
    }

    const { row, col } = item.dataset;
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        const boxRow = parseInt(box.dataset.row, 10);
        const boxCol = parseInt(box.dataset.col, 10);

        if (box === item) {
            box.style.background = "lightgreen";
        } else if (
            box.dataset.row === row ||
            box.dataset.col === col ||
            boxRow - boxCol === row - col ||
            boxRow + boxCol === parseInt(row, 10) + parseInt(col, 10)
        ) {
            box.style.background = "grey";
        }
    });
});



















