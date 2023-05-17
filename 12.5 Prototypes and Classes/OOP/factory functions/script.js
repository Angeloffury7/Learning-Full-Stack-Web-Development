//converts rbg to hex
function hex(r, g, b) {
    return "#" + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
}

function rgb(r,g,b) {
    return `rgb(${r}, ${g}, ${b})`;
}

//FACTORY FUNCTION (building an object and returning it)

function makeColor(r,g,b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this; //it's looking at the color object
        return `rgb(${r}, ${g}, ${b})`;
    }

    color.hex = function () {
        const { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(25, 250, 255);
console.log(firstColor.rgb());
console.log(firstColor.hex());

firstColor.r = 100;
console.log(firstColor.rgb());