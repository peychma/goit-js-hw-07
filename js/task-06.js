const controls = document.querySelector(".controls");
    const input = document.querySelector("input");
    const createButton = document.querySelector("[data-create]");
    const destroyButton = document.querySelector("[data-destroy]");
    const boxesList = document.querySelector("#boxes");

    createButton.addEventListener('click', createBoxes);
    destroyButton.addEventListener('click', destroyBoxes);

    function createBoxes() {
      const amount = Number(input.value);
      if (isNaN(amount) || amount < 1 || amount > 100) {
        return;
      }

      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesList.appendChild(box);
      }
    }

    function destroyBoxes() {
      while (boxesList.firstChild) {
        boxesList.removeChild(boxesList.firstChild);
      }
    }

    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }
