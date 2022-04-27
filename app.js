const sodaBottle = document.getElementById('soda');
const pieceOfCheese = document.getElementById('cheese');
const bundleOfGrapes = document.getElementById('grapes');
const loafOfBread = document.getElementById('bread');
const sliceOfMelon = document.getElementById('watermelon');
const randomButton = document.getElementById('random-button');

sodaBottle.addEventListener('click', () => {
    sodaBottle.classList.toggle('picked');
}),

pieceOfCheese.addEventListener('click', () => {
    pieceOfCheese.classList.toggle('picked');
}),

bundleOfGrapes.addEventListener('click', () => {
    bundleOfGrapes.classList.toggle('picked');
}),

loafOfBread.addEventListener('click', () => {
    loafOfBread.classList.toggle('picked');
}),

sliceOfMelon.addEventListener('click', () => {
    sliceOfMelon.classList.toggle('picked');
});

// const foodStuff = [sodaBottle, pieceOfCheese, bundleOfGrapes, loafOfBread, sliceOfMelon];

randomButton.addEventListener('click', () => {
    let randomNumber = Math.ceil(Math.random() * 5);
    console.log(randomNumber);
    if (randomNumber === 1) {
        sodaBottle.classList.toggle('picked');
    } else if (randomNumber === 2) {
        pieceOfCheese.classList.toggle('picked');
    } else if (randomNumber === 3) {
        bundleOfGrapes.classList.toggle('picked');
    } else if (randomNumber === 4) {
        loafOfBread.classList.toggle('picked');
    } else if (randomNumber === 5) {
        sliceOfMelon.classList.toggle('picked');
    }
});

// mutate array 



