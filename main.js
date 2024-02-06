let startTime, endTime;

document.getElementById('sortWithWorker').addEventListener('click', function() {
    startTime = performance.now();
    sortWithWorker();
});

document.getElementById('sortWithoutWorker').addEventListener('click', function() {
    startTime = performance.now();
    sortWithoutWorker();
});

function sortWithWorker() {
    if (window.Worker) {
        const myWorker = new Worker('worker.js');
        const array = generateLargeArray();
        
        myWorker.postMessage(array);
        
        myWorker.onmessage = function(e) {
            endTime = performance.now();
            displayResults(e.data, 'Web Worker', endTime - startTime);
        }
    } else {
        alert('Your browser does not support Web Workers.');
    }
}
function sortWithoutWorker() {
    console.log("sortWithoutWorker called"); // Check if the function is invoked
    const array = generateLargeArray();
    console.log("Array generated", array.slice(0, 10)); // Check the array generation
    startTime = performance.now();
    console.log("Sorting started");
    const sortedArray = quickSort(array);
    console.log("Sorting finished", sortedArray.slice(0, 10)); // Check if sorting completes
    endTime = performance.now();
    displayResults(sortedArray, 'Main Thread', endTime - startTime);
}



function displayResults(array, method, time) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML += `<h3>Sorted by ${method}</h3>
                             <p>Time taken: ${time.toFixed(2)} ms</p>
                             ${arrayToGrid(array)}`;
}

function arrayToGrid(array) {
    // Limiting the display to the first 100 elements for brevity
    const limitedArray = array.slice(0, 100);
    const rows = limitedArray.map(item => `<div class="row"><div class="col">${item}</div></div>`).join('');
    return `<div class="container">${rows}</div>`;
}

function generateLargeArray() {
    return Array.from({length: 10000}, () => Math.floor(Math.random() * 10000));
}

// Include quickSort function here or in an external script
// QuickSort algorithm implementation
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}