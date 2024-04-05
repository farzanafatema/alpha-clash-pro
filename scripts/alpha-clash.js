// function play() {
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// }
function handleKeybordButtonPress(event) {
    playerPressed = event.key;
    console.log('player pressed', playerPressed)
    if (playerPressed === ('Escape')) {
        gameOver();
    }
    const currentAlphabateElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabateElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);
    //check match or not
    if (playerPressed === expectedAlphabet) {

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setElementValueById('current-score', updatedScore);


        //update score
        // const currentScoreElement = document.getElementById('current-score')
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;


        removeBackgroundColor(expectedAlphabet);
        countinuePlaying();
    } else {
        const currentLife = getTextElementValueById('current-life')
        const updatedLife = currentLife - 1;
        setElementValueById('current-life', updatedLife)

        if (updatedLife === 0) {
            gameOver()
        }
        // const currentLifeElement = document.getElementById('current-life')
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText)
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
        // if (newLife == 0) {
        //     play();
        // }
    }

}

document.addEventListener('keyup', handleKeybordButtonPress)
function countinuePlaying() {
    const alphabet = getRandomAlphabet();
    console.log(alphabet)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColor(alphabet)
}

function play() {
    //hide all except playgroud
    hideElementById('home-screen');
    showElementById('play-ground');
    hideElementById('final-score')
    //reset score and life
    setElementValueById('current-score', 0)
    setElementValueById('current-life', 5)
    countinuePlaying()

}
function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    const lastScore = getTextElementValueById('current-score')
    setElementValueById('last-score', lastScore)
    const currentAlphabet = getElementTextById('current-alphabet')
    removeBackgroundColor(currentAlphabet)

}