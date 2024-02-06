const arraySize = 2000000; // Size of the array for processing

// Function to perform sorting without using Web Workers
function SortArrayWithoutWebWorkers() {
    const array = generateRandomArray(arraySize);
    array.sort();

    alert("Task Completed (without Web Workers)")
}

// Function to perform sorting with Web Workers
function SortArrayWithWebWorkers() {
    const worker = new Worker('worker.js');

    worker.onmessage = function (event) {
        alert("Task Completed (with Web Workers)")
    };

    worker.postMessage({ arraySize });
}

// Function to generate a random array
function generateRandomArray(size) {
    const array = new Array(size);
    for (let i = 0; i < size; i++) {
        array[i] = Math.random();
    }
    return array;
}

let currentIndex = 0;
const lightColors = ['#ADD8E6', '#90EE90', '#FFFFE0', '#FFB6C1', '#FFE4B2', '#E6E6FA'];
// function to check Main Thread Responding by changing background colors
function CheckMainThreadResponding() {
    document.getElementsByTagName("body")[0].style.backgroundColor = lightColors[currentIndex];
    currentIndex = (currentIndex + 1) % lightColors.length; // Increment index and wrap around
}