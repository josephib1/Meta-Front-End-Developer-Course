// Task 1
var dairy = ['cheese', 'sour cream',
    'milk', 'yogurt', 'ice cream', 'milkshake']

    function logDairy() {
    for ( item of dairy) {
        console.log(item);
    }
    }
logDairy();
// Task 2
const animal = {
canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (each of Object.keys(bird)) {
        console.log(`${each}: ${bird[each]}`);
    }
}
birdCan();
// Task 3
function animalCan() {
    for (one in bird) {
        console.log(`${one}: ${bird[one]}`);
    }
}
animalCan();

