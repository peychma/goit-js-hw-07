const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", updateText);

function updateText() {
    const enteredName = nameInput.value.trim();
    nameOutput.textContent = enteredName || "Anonymous";
}