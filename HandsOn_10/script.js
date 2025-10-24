const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

textInput.addEventListener("input", () => {
    const count = textInput.value.length;
    charCount.textContent = count;
});
