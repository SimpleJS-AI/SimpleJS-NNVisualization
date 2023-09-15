
// ******************
// *  SVG GENERATOR *
// ******************

const colors = [
    '#a8c7fa',
    '#062e6f',
    '#004a77',
    '#4880b0',
]

function generate(input, hidden, output) {
    const svg = document.getElementsByTagName('svg')[0];

    let inputLayerPosY = [];
    for (let i = 0; i < input; i++) {
        inputLayerPosY.push(600/input + 600/input * (i - 0.5));
    }
    let hiddenLayerPosY = [];
    for (let i = 0; i < hidden; i++) {
        hiddenLayerPosY.push(600/hidden + 600/hidden * (i - 0.5));
    }
    let outputLayerPosY = [];
    for (let i = 0; i < output; i++) {
        outputLayerPosY.push(600/output + 600/output * (i - 0.5));
    }

    let innerHTML = '';

    innerHTML += '<g id="neural-network">'


    innerHTML += '<g id="input-hidden-weights">'
    for (let i = 0; i < input; i++) {
        for (let j = 0; j < hidden; j++) {
            innerHTML += `<path d="M 100 ${inputLayerPosY[i]} C 200 ${inputLayerPosY[i]}, 200 ${hiddenLayerPosY[j]}, 300 ${hiddenLayerPosY[j]}" stroke="${colors[3]}" stroke-width="3" fill="none" />`
        }
    }
    innerHTML += '</g>'
    innerHTML += '<g id="input-hidden-weights-animated">'
    for (let i = 0; i < input; i++) {
        for (let j = 0; j < hidden; j++) {
            innerHTML += `<path d="M 100 ${inputLayerPosY[i]} C 200 ${inputLayerPosY[i]}, 200 ${hiddenLayerPosY[j]}, 300 ${hiddenLayerPosY[j]}" stroke="${colors[2]}" stroke-width="3" fill="none" />`
        }
    }
    innerHTML += '</g>'

    innerHTML += '<g id="hidden-output-weights">'
    for (let i = 0; i < hidden; i++) {
        for (let j = 0; j < output; j++) {
            innerHTML += `<path d="M 300 ${hiddenLayerPosY[i]} C 400 ${hiddenLayerPosY[i]}, 400 ${outputLayerPosY[j]}, 500 ${outputLayerPosY[j]}" stroke="${colors[3]}" stroke-width="3" fill="none" />`
        }
    }
    innerHTML += '</g>'
    innerHTML += '<g id="hidden-output-weights-animated">'
    for (let i = 0; i < hidden; i++) {
        for (let j = 0; j < output; j++) {
            innerHTML += `<path d="M 300 ${hiddenLayerPosY[i]} C 400 ${hiddenLayerPosY[i]}, 400 ${outputLayerPosY[j]}, 500 ${outputLayerPosY[j]}" stroke="${colors[2]}" stroke-width="3" fill="none" />`
        }
    }
    innerHTML += '</g>'


    innerHTML += '<g id="input-layer">'
    for (let i = 0; i < input; i++) {
        innerHTML += `<circle cx="100" cy="${inputLayerPosY[i]}" r="20" stroke="${colors[1]}" stroke-width="4" fill="${colors[0]}" />`
    }
    innerHTML += '</g>'

    innerHTML += '<g id="hidden-layer">'
    for (let i = 0; i < hidden; i++) {
        innerHTML += `<circle cx="300" cy="${hiddenLayerPosY[i]}" r="20" stroke="${colors[1]}" stroke-width="4" fill="${colors[0]}" />`
    }
    innerHTML += '</g>'

    innerHTML += '<g id="output-layer">'
    for (let i = 0; i < output; i++) {
        innerHTML += `<circle cx="500" cy="${outputLayerPosY[i]}" r="20" stroke="${colors[1]}" stroke-width="4" fill="${colors[0]}" />`
    }
    innerHTML += '</g>'


    innerHTML += '</g>'
    svg.innerHTML = innerHTML;
}

let data = [3,6,2];
generate(...data);
function setData(pos, add = 0){
    let num = document.getElementsByTagName("input")[pos].value;
    num = parseInt(num) + add;
    num = num > 0 ? num < 9 ? num : 9 : 1;
    data[pos] = num;
    generate(...data);
    document.getElementsByTagName("input")[pos].value = data[pos];
}




