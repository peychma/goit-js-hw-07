const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesList = document.querySelector("#boxes");

    createButton.addEventListener('click', createBoxes);
    destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  boxesList.innerHTML = "";
      const amount = Number(input.value);
      if (isNaN(amount) || amount < 1 || amount > 100) {
        return;
      }
      let boxesMarkup = "";
      for (let i = 0; i < amount; i++) {
        const boxColor = getRandomHexColor();
        boxesMarkup += `<div class="box" style="width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: ${boxColor};"></div>`;
      }
      boxesList.innerHTML = boxesMarkup;
    }
function destroyBoxes() {
      boxesList.innerHTML = "";
      input.value = "";
    }

    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }
