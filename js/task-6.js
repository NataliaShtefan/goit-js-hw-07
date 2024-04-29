function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input[type]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  const amount = +input.value;
  if (amount <= 100 && amount >= 1) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Between 1 and 100.");
  }
});

function createBoxes(amount) {
  boxes.innerHTML = "";
  const arrBoxes = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    arrBoxes.push(
      `<div style='background-color: ${getRandomHexColor()}; width:${boxSize}px; height:${boxSize}px;'></div>`
    );
    boxSize += 10;
  }
  boxes.innerHTML = arrBoxes.join("");
}

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}

//  слилі для діву елементів
boxes.style.display = "flex"
boxes.style.flexWrap = "wrap";
boxes.style.gap = "44px";
boxes.style.width = "490px";
boxes.style.padding = "32px"
boxes.style.borderRadius = "8px"
boxes.style.backgroundColor = "#fafafa"

//  стилі для діву з інпутом

const controls = document.querySelector("#controls")

controls.style.width = "490px";
controls.style.padding = "32px";
controls.style.marginBottom = "16px";
controls.style.borderRadius = "8px"
controls.style.backgroundColor = "#fafafa"

//  стилі дл інпутом
input.style.width = "140px";
input.style.margin = "0";



btnCreate.style.marginLeft = "16px";
btnCreate.style.width = "120px";

btnDestroy.style.marginLeft = "16px";
btnDestroy.style.width = "120px";
btnDestroy.style.backgroundColor = "#FF4E4E";


function focusButton() {
  btnDestroy.focus(); 
  btnDestroy.style.backgroundColor = "#FF7070"; 
}


function hoverButton() {
  btnDestroy.style.backgroundColor = "#FF7070"; 
}

function resetButton() {
  btnDestroy.style.backgroundColor = "#FF4E4E"; 
}

btnDestroy.addEventListener('mouseover', hoverButton);
btnDestroy.addEventListener('focus', focusButton);
btnDestroy.addEventListener('mouseout', resetButton);
btnDestroy.addEventListener('blur', resetButton);