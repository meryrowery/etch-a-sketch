function getRandomColor() {
    var letters = '89ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
  }

const container = document.querySelector("#container");

for (i=0;i<256;i++) {
    const content = document.createElement("div");
    // content.textContent = "box";
    content.classList.add("box")
    container.appendChild(content);
}

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => 
    {box.addEventListener("mouseover", () => {
        box.style.backgroundColor = getRandomColor();
    });
});

const body = document.querySelector("body")
const button = document.createElement('button')
button.textContent = "Button"
body.append(button)

