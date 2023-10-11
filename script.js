
// ******************
// *  SVG GENERATOR *
// ******************

const colors = [
    '#ffb3b3',
    '#e3e3e3',
    '#5f131b',
    '#5f131b',
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
            innerHTML += `<path d="M 100 ${inputLayerPosY[i]} C 200 ${inputLayerPosY[i]}, 200 ${hiddenLayerPosY[j]}, 300 ${hiddenLayerPosY[j]}" stroke="${colors[1]}" stroke-width="4" fill="none" />`
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
            innerHTML += `<path d="M 300 ${hiddenLayerPosY[i]} C 400 ${hiddenLayerPosY[i]}, 400 ${outputLayerPosY[j]}, 500 ${outputLayerPosY[j]}" stroke="${colors[1]}" stroke-width="4" fill="none" />`
        }
    }
    innerHTML += '</g>'


    innerHTML += '<g id="input-layer">'
    for (let i = 0; i < input; i++) {
        // innerHTML += `<circle cx="100" cy="${inputLayerPosY[i]}" r="20" stroke="${colors[2]}" stroke-width="4" fill="${colors[0]}" />`
        innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" x="${100 -20 -8}" y="${inputLayerPosY[i] -20 -8}" width="80px" height="80px" viewBox="0 0 40 40" fill="none" class="mask"><path d="M.887 14.467C-2.845 5.875 5.875-2.845 14.467.887l1.42.617a10.323 10.323 0 0 0 8.225 0l1.42-.617c8.593-3.732 17.313 4.988 13.581 13.58l-.617 1.42a10.323 10.323 0 0 0 0 8.225l.617 1.42c3.732 8.593-4.989 17.313-13.58 13.581l-1.42-.617a10.323 10.323 0 0 0-8.225 0l-1.42.617C5.874 42.845-2.846 34.125.886 25.533l.617-1.42a10.323 10.323 0 0 0 0-8.225l-.617-1.42Z" fill="${colors[2]}" stroke-width="0" stroke-linecap="round"/></svg>`
    }
    innerHTML += '</g>'

    innerHTML += '<g id="hidden-layer">'
    for (let i = 0; i < hidden; i++) {
        //innerHTML += `<circle cx="300" cy="${hiddenLayerPosY[i]}" r="20" stroke="${colors[2]}" stroke-width="4" fill="${colors[0]}" />`
        innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" x="${300 -20 -8}" y="${hiddenLayerPosY[i] -20 -8}" width="80px" height="80px" viewBox="0 0 40 40" fill="none" class="mask"><path d="M.887 14.467C-2.845 5.875 5.875-2.845 14.467.887l1.42.617a10.323 10.323 0 0 0 8.225 0l1.42-.617c8.593-3.732 17.313 4.988 13.581 13.58l-.617 1.42a10.323 10.323 0 0 0 0 8.225l.617 1.42c3.732 8.593-4.989 17.313-13.58 13.581l-1.42-.617a10.323 10.323 0 0 0-8.225 0l-1.42.617C5.874 42.845-2.846 34.125.886 25.533l.617-1.42a10.323 10.323 0 0 0 0-8.225l-.617-1.42Z" fill="${colors[2]}" stroke-width="0" stroke-linecap="round"/></svg>`

    }
    innerHTML += '</g>'

    innerHTML += '<g id="output-layer">'
    for (let i = 0; i < output; i++) {
        //innerHTML += `<circle cx="500" cy="${outputLayerPosY[i]}" r="20" stroke="${colors[2]}" stroke-width="4" fill="${colors[0]}" />`
        innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" x="${500 -20 -8}" y="${outputLayerPosY[i] -20 -8}" width="80px" height="80px" viewBox="0 0 40 40" fill="none" class="mask"><path d="M.887 14.467C-2.845 5.875 5.875-2.845 14.467.887l1.42.617a10.323 10.323 0 0 0 8.225 0l1.42-.617c8.593-3.732 17.313 4.988 13.581 13.58l-.617 1.42a10.323 10.323 0 0 0 0 8.225l.617 1.42c3.732 8.593-4.989 17.313-13.58 13.581l-1.42-.617a10.323 10.323 0 0 0-8.225 0l-1.42.617C5.874 42.845-2.846 34.125.886 25.533l.617-1.42a10.323 10.323 0 0 0 0-8.225l-.617-1.42Z" fill="${colors[2]}" stroke-width="0" stroke-linecap="round"/></svg>`

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




