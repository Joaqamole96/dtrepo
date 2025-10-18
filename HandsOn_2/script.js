let celsiusActive = true;

function convertTemp() {
    const celsiusInput = document.getElementById('celsiusInput');
    const fahrenheitInput = document.getElementById('fahrenheitInput');
    const result = document.getElementById('result');

    if (celsiusActive) {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;

        fahrenheitInput.value = fahrenheit.toFixed(2);
        result.textContent = `(${celsius}°C × 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    } else {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * 5/9;

        celsiusInput.value = celsius.toFixed(2);
        result.textContent = `(${fahrenheit}°F − 32) × 5/9 = ${celsius.toFixed(2)}°C`;
    }
}

function switchInputs() {
    celsiusActive = !celsiusActive;
    document.getElementById('celsiusInput').disabled = !celsiusActive;
    document.getElementById('fahrenheitInput').disabled = celsiusActive;
    document.getElementById('celsiusInput').value = '';
    document.getElementById('fahrenheitInput').value = '';
    document.getElementById('result').textContent = '';

    const arrow = document.getElementById('arrow');
    arrow.innerHTML = celsiusActive ? '&#8594;' : '&#8592;';
}