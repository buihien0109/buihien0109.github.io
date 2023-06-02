import { IndicatorRenderer } from "./engine.js";

const containerEl = document.querySelector(".container");

const ecgConfig = {
    color: "00FF00",
    WINDOW_POINTS: 1250,
    scanBarLength: 40,
    minVal: -5,
    maxVal: 255,
    type: "ecg",
    duration: 5000
}

const render = new IndicatorRenderer(
    containerEl,
    ecgConfig
);

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateData = (size) => {
    let count = 0
    let rs = []
    for (let i = 0; i < size; i++) {
        count++
        if (count % 100 === 0) {
            rs.push(randomNumber(190, 220))
            continue;
        }
        rs.push(randomNumber(110, 130))
    }

    return rs;
}

let buffer = new ArrayBuffer(1250)
let view = new Int8Array(buffer);

let data = generateData(1250)
view.set(data);

console.log(view);

render.render(generateData());

// setInterval(() => {
//     data.push(generateData(250));
// }, 1000)

console.log(data);