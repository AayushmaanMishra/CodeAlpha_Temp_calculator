console.log('Welcome to 🌡️ Temperature Converter');

const fa = document.getElementById('fa');
const tempInput = document.getElementById('temp');
const tempSelect = document.getElementById('temp_diff');
const resultContainer = document.getElementById('resultContainer');

const setIconAndColor = (icon, color) => {
    fa.innerHTML = icon;
    fa.style.color = color;
}

const tempLoad = () => {
    setIconAndColor('&#xf2cb', '#ffa41b');

    setTimeout(() => {
        setIconAndColor('&#xf2ca', '#ffa41b');
    }, 1000)

    setTimeout(() => {
        setIconAndColor('&#xf2c9', '');
    }, 2000)

    setTimeout(() => {
        setIconAndColor('&#xf2c8', '');
    }, 3000)

    setTimeout(() => {
        setIconAndColor('&#xf2c7', '#ff5151');
    }, 4000)
}

setInterval(() => {
    setIconAndColor('&#xf2ca', '#ffa41b');
    tempLoad();
}, 5000);

tempLoad();

const celTOfah = (cel) => (cel * (9 / 5) + 32);
const fahTOcel = (fahr) => ((fahr - 32) * 5 / 9);

const calculateTemp = () => {
    const numberTemp = parseFloat(tempInput.value);
    const valeTemp = tempSelect.value;

    let result;
    if (valeTemp === "cel") {
        result = celTOfah(numberTemp);
        resultContainer.innerHTML = `= ${result.toFixed(2)}°Fahrenheit`;
    } else {
        result = fahTOcel(numberTemp);
        resultContainer.innerHTML = `= ${result.toFixed(2)}°Celsius`;
    }

    setTimeout(() => {
        window.location.reload();
    }, 30000);
}
