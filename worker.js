// Listener for messages from the main thread
self.addEventListener('message', function(e) {
    // Assuming the message contains an array to sort
    const array = e.data;
    if (array && Array.isArray(array)) {
        const sortedArray = quickSort(array);
        postMessage(sortedArray); // Send the sorted array back to the main thread
    }
});

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
