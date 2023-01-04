let defaulColors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
];

let colors = [...defaulColors];

// Render box in ui
const renderColors = colors => {
    $(".boxes").html("");

    let html = "";
    colors.forEach((color, index) => {
        html += `
            <div 
                class="box" 
                style="background-color : ${color}"
                onclick="removeBox(${index})"
            ></div>
        `
    });
    $(".boxes").html(html);

    // Update totalbox
    $(".points").html(colors.length);
}

// Remove box on click
const removeBox = (index) => {
    colors.splice(index, 1);
    renderColors(colors);
}

// Add more box
$("#btn").click(() => {
    colors = [...colors, ...defaulColors];
    renderColors(colors);
})

renderColors(colors);