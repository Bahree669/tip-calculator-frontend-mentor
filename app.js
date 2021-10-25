// button and tip text
const calcBtn = document.querySelector('#button-tip')
const tiptext = document.querySelector('.result-tip')
const totalText = document.querySelector('.result-total')

// get the value of radio button
function displayRadioValue() {
    const dataValue = document.getElementsByName('bill-prcntg')
      
    for(i = 0; i < dataValue.length; i++) {
        if(dataValue[i].checked){
            return dataValue[i].value
        }
    }
}

// get the value from the input form
function getCustomVal(){
    return Number(document.querySelector('#custom').value)
}

function getBillVal(){
    return document.querySelector('#bill').value
}

function getNumberPpl(){
    return document.querySelector('#ppl').value
}

// bellow is the main function
function calcValue(){
    // if the type of custom value is number we want to calculate the tip using the custom value
    if(typeof getCustomVal() === 'number' && getCustomVal() > 0){
        console.log(`custom value \n ${getCustomVal()}`)

        totalText.textContent = (getBillVal() * getCustomVal()) / 100
        tiptext.textContent = ((getBillVal() * getCustomVal()) / 100) / getNumberPpl()
    } else {
        console.log(`radio value \n ${displayRadioValue()}`)

        totalText.textContent = ((document.querySelector('#bill').value * displayRadioValue()) / 100)
        tiptext.textContent = (((document.querySelector('#bill').value * displayRadioValue()) / 100) / getNumberPpl())
    }
}

calcValue()

// call the main function when a button is clicked
calcBtn.addEventListener('click', () =>{
    calcValue()
})