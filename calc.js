// button and tip text
const calcBtn = document.querySelector("#button-tip");
const tiptext = document.querySelector(".result-tip");
const totalText = document.querySelector(".result-total");

// create a function that return bill value
function getBill() {
    return document.getElementById("bill").value;
}

// create a function that return ppl value
function getPpl() {
    return document.getElementById("ppl").value;
}

// get the custom value from custom
function getCustomVal() {
    return document.getElementById("custom").value;
}

// get the radio value and execute a function that calculate the bill
const custom = document.getElementById("custom");
custom.addEventListener("input", (e) => getValue(e.target.value));

function getValue(y) {
    tiptext.textContent = "$" + ((getBill() * (y / 100)) / getPpl()).toFixed(2);
    totalText.textContent = "$" + (getBill() * (y / 100)).toFixed(2);
}

const radioBtn = document.getElementsByName("bill-prcntg");
radioBtn.forEach((e) => {
    e.addEventListener("click", (e) => {
        let data = e.target.value.slice();

        tiptext.textContent = "$" + ((getBill() * (data / 100)) / getPpl()).toFixed(2);
        totalText.textContent = "$" + (getBill() * (data / 100)).toFixed(2);
    });
});

// reset the total and tip value to zero if this button is clicked
calcBtn.addEventListener("click", () => {
    tiptext.textContent = 0;
    totalText.textContent = 0;
    document.getElementById("bill").value = "";
    document.getElementById("ppl").value = "";
    document.getElementById("custom").value = "";
});
