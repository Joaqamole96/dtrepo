// ======== 1. Change Page Background Color ======== //
const pageColorPicker = document.getElementById("pageColorPicker");

pageColorPicker.addEventListener("input", (e) => {
    const color = e.target.value;
    document.body.style.backgroundColor = color;

    // Adjust text color based on brightness
    const brightness = getBrightness(color);
    document.body.style.color = brightness < 130 ? "white" : "#333";
});

// ======== 2. Change Div Background & Text ======== //
const divColorPicker = document.getElementById("divColorPicker");
const customDiv = document.getElementById("customDiv");
const divTextInput = document.getElementById("divTextInput");
const changeTextBtn = document.getElementById("changeTextBtn");

divColorPicker.addEventListener("input", (e) => {
    const color = e.target.value;
    customDiv.style.backgroundColor = color;

    const brightness = getBrightness(color);
    customDiv.style.color = brightness < 130 ? "white" : "#333";
});

changeTextBtn.addEventListener("click", () => {
    const newText = divTextInput.value.trim();
    if (newText) {
        customDiv.textContent = newText;
    }
});

// ======== 3. Replace Image ======== //
const imageUploader = document.getElementById("imageUploader");
const displayImage = document.getElementById("displayImage");

imageUploader.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            displayImage.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// ======== Helper Function: Brightness Detector ======== //
function getBrightness(hex) {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
}