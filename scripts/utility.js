function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}
function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500')
}
function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-500')
}
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const value = parseInt(elementValue);
    return value;
}
function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function getElementTextById(elementId) {
    const element = document.getElementById(elementId)
    const text = element.innerText;
    return text;
}


function getRandomAlphabet() {
    //create alphabet
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');
    // console.log(alphabets);
    //get a random index
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);
    //alphabet
    const alphabet = alphabets[index]
    // console.log(index, alphabet)
    return alphabet;
}