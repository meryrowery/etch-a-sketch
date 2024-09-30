function getRandomColor() {
    var letters = '89ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
  }

const container = document.querySelector("#container");

// for (i=0;i<256;i++) {
//     const content = document.createElement("div");
//     // content.textContent = "box";
//     content.classList.add("box")
//     container.appendChild(content);
// }

// const boxes = document.querySelectorAll(".box");
// boxes.forEach((box) => 
//     {box.addEventListener("mouseover", () => {
//         box.style.backgroundColor = getRandomColor();
//     });
// });

playGame(16)

function askMe() {
    while (true) {
      const choice = prompt("Please provide a number for the grid");
      if (choice <= 100) {
        return parseInt(choice);
      } else {
        alert("Invalid choice. Please pick a smaller number");
      }
    }
  };

function playGame(numberRows) {
    const container = document.querySelector("#container");
    // Clear the previous grid
    container.innerHTML = '';


    for (row=0;row<(numberRows);row++) {
        const divRow = document.createElement("div")
        divRow.setAttribute("class","row")
        for (column=0;column<numberRows;column++) {
            const divCol = document.createElement("div");
            divCol.setAttribute("class","column")
            // content.textContent = "box";
            divCol.classList.add("box")
            divRow.appendChild(divCol);
        }
    container.appendChild(divRow)
    };

    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => 
    {box.addEventListener("mouseover", () => {
        box.style.backgroundColor = getRandomColor();
    });
});
}

const body = document.querySelector("body")
const button = document.createElement('button')
button.textContent = "Start a new game"
body.append(button)
button.addEventListener("click", () => {
    const gridSize = askMe();
    playGame(gridSize)
});


