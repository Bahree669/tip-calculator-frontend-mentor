// tipTotal = bill * tipPercentage
// tipAmount = bill + tipTotal

const billCalculator = {
    bill: 0,
    numberOfPeople: 0,
    tipPercentage: 0,
    tipCustom: 0,
};

document.getElementById("ppl").addEventListener("input", handleInput);
document.getElementById("bill").addEventListener("input", handleInput);
document.getElementById("custom-tip").addEventListener("input", handleInput);
document.querySelectorAll("input.radio").forEach((input) => input.addEventListener("input", handleInput));

function handleInput(e) {
    billCalculator[this.name] = this.value || 0;

    const { bill, tipCustom, tipPercentage, numberOfPeople } = billCalculator;

    const billPerPerson = Number(bill) / Number(numberOfPeople);
    const tipPerPerson = tipCustom
        ? billPerPerson * (Number(tipCustom) / 100)
        : billPerPerson * (Number(tipPercentage) / 100);
    const totalAmount = billPerPerson + tipPerPerson;

    displayTip(tipPerPerson, totalAmount);
}

const tiptext = document.querySelector(".result-tip");
const totalText = document.querySelector(".result-total");
function displayTip(tipAmount, tipTotal) {
    tiptext.textContent = tipAmount ? `$${tipAmount.toFixed(2)}` : "$0.00";
    totalText.textContent = tipTotal ? `$${tipTotal.toFixed(2)}` : "$0.00";
}

document.querySelector("#button-reset").addEventListener("click", resetCalculator);
function resetCalculator() {
    billCalculator.bill = 0;
    billCalculator.numberOfPeople = 0;
    billCalculator.tipPercentage = 0;
    billCalculator.tipCustom = 0;

    displayTip();
}
