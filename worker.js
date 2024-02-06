// worker.js
onmessage = function (event) {
    const arraySize = event.data.arraySize;
    const array = new Array(arraySize);
    for (let i = 0; i < arraySize; i++) {
      array[i] = Math.random();
    }
    array.sort();
  
    postMessage({ result: 'Processing with Web Workers completed.' });
  };
  