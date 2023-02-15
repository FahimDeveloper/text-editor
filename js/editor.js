//text
const text = document.getElementById("text");

//text bold
document.getElementById("bold").addEventListener("click", function () {
    if (text.style.fontWeight === "700") {
        text.style.fontWeight = "400";
    } else {
        text.style.fontWeight = "700";
    }
});

//text italic
document.getElementById("italic").addEventListener("click", function () {
    if (text.style.fontStyle === "italic") {
        text.style.fontStyle = "normal";
    } else {
        text.style.fontStyle = "italic";
    }
});

//text underline
document.getElementById("underline").addEventListener("click", function () {
    if (text.style.textDecoration === "underline") {
        text.style.textDecoration = "none";
    } else {
        text.style.textDecoration = "underline";
    }
});

// fontSize
document.getElementById("font-size").addEventListener("click", function (event) {
    const fontSizePx = event.target.value;
    text.style.fontSize = fontSizePx + "px";
});
document.getElementById("font-size").addEventListener("keyup", function (event) {
    const fontSizePx = event.target.value;
    text.style.fontSize = fontSizePx + "px";
});
//default vlaue
document.getElementById("font-size").defaultValue = "20"

//text align left
document.getElementById("text-align-left").addEventListener("click", function () {
    text.style.textAlign = "left"
});

//text align center
document.getElementById("text-align-center").addEventListener("click", function () {
    text.style.textAlign = "center"
});

//text align right
document.getElementById("text-align-right").addEventListener("click", function () {
    text.style.textAlign = "right"
});

//text align justify
document.getElementById("text-align-justify").addEventListener("click", function () {
    text.style.textAlign = "justify"
});

//text transform
document.getElementById("text-transform").addEventListener("click", function () {
    if (text.style.textTransform === "uppercase") {
        text.style.textTransform = "none";
    } else {
        text.style.textTransform = "uppercase";
    }
});

//text color
document.getElementById("body").addEventListener("input", function () {
    const takeColor = document.getElementById("color").value
    text.style.color = takeColor;
})