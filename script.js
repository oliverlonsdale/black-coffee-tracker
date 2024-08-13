let maxCaffeine = 0;
let caffeineConsumed = 0;
let progressValue = 0;

const calculateButton = document.getElementById("calculate");

function calculator() {
    const weight = parseFloat(document.getElementById("weight").value);
    const coffee = parseFloat(document.getElementById("coffee").value);
    const progress = document.getElementById("progress-bar");

    maxCaffeine = weight * 2;
    caffeineConsumed = coffee * 12;
    
    progressValue += caffeineConsumed;
    progress.value = progressValue;
    progress.max = maxCaffeine;

    if (progress.value === progress.max) {
        alert("You cannot drink anymore caffeine");
        return;
    }
    if (isNaN(caffeineConsumed) || caffeineConsumed<0) {
        alert("Invalid input/s!");
        return;
    }

    const resultDiv = document.createElement('div');
    const result = document.createTextNode(`You drank ${caffeineConsumed} mg, `);
    resultDiv.appendChild(result);
    const remaining = (maxCaffeine - progressValue) / 12;
    resultDiv.appendChild(document.createTextNode(`You can drink ${Math.round(remaining)} oz more`));

    document.querySelector('.main').appendChild(resultDiv);
};
calculateButton.addEventListener('click', calculator);