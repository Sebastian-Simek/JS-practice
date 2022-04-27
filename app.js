const sodaBottle = document.getElementById('soda');
const pieceOfCheese = document.getElementById('cheese');

sodaBottle.addEventListener('click', () => {
    sodaBottle.classList.toggle('picked');
});

pieceOfCheese.addEventListener('click', () => {
    pieceOfCheese.classList.toggle('picked');
});