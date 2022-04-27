const sodaBottle = document.getElementById('soda');
const pieceOfCheese = document.getElementById('cheese');
const bundleOfGrapes = document.getElementById('grapes');
const loafOfBread = document.getElementById('bread');
const sliceOfMelon = document.getElementById('watermelon');

sodaBottle.addEventListener('click', () => {
    sodaBottle.classList.toggle('picked');
});

pieceOfCheese.addEventListener('click', () => {
    pieceOfCheese.classList.toggle('picked');
});

bundleOfGrapes.addEventListener('click', () => {
    bundleOfGrapes.classList.toggle('picked');
});

loafOfBread.addEventListener('click', () => {
    loafOfBread.classList.toggle('picked');
});

sliceOfMelon.addEventListener('click', () => {
    sliceOfMelon.classList.toggle('picked');
});
