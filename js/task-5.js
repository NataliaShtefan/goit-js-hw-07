const colorSpan = document.querySelector(".color")  // витянула спан для запису кольору


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color") //витянула ктопкbtn
btn.addEventListener("click", changeBodyColor)

 function changeBodyColor () {
  document.body.style.backgroundColor = getRandomHexColor();
  let randomColor =getRandomHexColor()
  colorSpan.textContent = randomColor
}

const container = document.querySelector(".widget")
container.style.padding = "100px 88px";
container.style.margin = "0 auto";


