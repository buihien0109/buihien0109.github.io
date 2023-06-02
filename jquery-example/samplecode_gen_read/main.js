console.log('Buffer demo');
var min = 10;
var max = 100;
var buffer = [];
// generate 100 points
var dataPoints = 100;
var MAX_READ = 4;
var MAX_PUT = 6;
var lock = false;
var gen_handle, read_handle;
var NUM_GEN = 0;
var NUM_READ = 0;
var STOPPED = false;

//buffer size
var BUFFER_SIZE = 30


function genData(callback) {
    console.log('Start generating data');
    gen_handle = setInterval(function () {
        if (NUM_GEN >= dataPoints) {
            console.log(dataPoints, 'entries has been generated');
            clearInterval(gen_handle);
            callback();
        }
        if (!lock && buffer.length < BUFFER_SIZE) {
            lock = true;
            for (var i = 0; i < MAX_PUT; i++) {
                buffer.push(min + Math.round(Math.random() * (max - min)));
            }
            console.log(buffer);
            lock = false;
            NUM_GEN += MAX_PUT;
        }
        else {
            console.log('[Data generation] Buffer full or being updated, wait....');
        }
    }, 50);
}

function process(chunk) {
    console.log('[Read data] - processing chunk', chunk);
}

function readCallback() {
    console.log('remaining data:', buffer);
}

function readData(callback) {
    console.log('Start reading data');
    read_handle = setInterval(function () {

        if (!lock && buffer.length > 0) {
            lock = true;
            var chunk = buffer.splice(0, MAX_READ);
            lock = false;
            process(chunk);
            NUM_READ += chunk.length;
        }
        else {
            console.log('Waiting for data');
        }
        if (STOPPED) {
            clearInterval(read_handle);
            callback();
        }
    }, 70);
}

function finishGenerating() {
    console.log('Data generation completed!');
    STOPPED = true;
}

function main() {
    genData(finishGenerating);
    readData(readCallback);
}

main();