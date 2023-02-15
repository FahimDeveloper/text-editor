//text
const text = document.getElementById("text");
//functional work
function textRelated(value) {
    if (value == "bold") {
        if (text.style.fontWeight === "700") {
            text.style.fontWeight = "400";
        } else {
            text.style.fontWeight = "700";
        }
    } else if (value == "italic") {
        if (text.style.fontStyle === "italic") {
            text.style.fontStyle = "normal";
        } else {
            text.style.fontStyle = "italic";
        }
    } else if (value == "underline") {
        if (text.style.textDecoration === "underline") {
            text.style.textDecoration = "none";
        } else {
            text.style.textDecoration = "underline";
        }
    } else if (value == "fontSize") {
        const fontSizePx = document.getElementById("font-size").value;
        text.style.fontSize = fontSizePx + "px";
    }
    else if (value == "transform") {
        if (text.style.textTransform === "uppercase") {
            text.style.textTransform = "lowercase";
        } else {
            text.style.textTransform = "uppercase";
        }
    } else if (value == "color") {
        const takeColor = document.getElementById("color").value
        text.style.color = takeColor;
    }
}
//default vlaue
document.getElementById("font-size").defaultValue = "20";

function alignItem(value) {
    text.style.textAlign = value;
}