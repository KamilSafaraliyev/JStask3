//Let's say you have an array of arbitrary size filled with random numbers (one array per task).//
function getNumberFromUser(message) {
    let userValue;
    let flag = false;

    do {
        if (flag) {
            alert("You have to enter the number!");
        }
        userValue = +prompt(message);
        flag = true;
    } while (isNaN(userValue));

    return userValue;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//1. Find the minimum element of this array//
const itemsCount1 = getNumberFromUser(`Please enter the number:`);
const array1 = [];
for (let index = 0; index < itemsCount1; index++) {
    array1[index] = getRandomNumber(0, 100);
    console.log(array1[index]);
}
let minimum = array1[0];
for (let i = 1; i < array1.length; i++) {
    if (array1[i] < minimum) {
        minimum = array1[i];
    }
}
console.log(`Minimum element of this array: ${minimum}`);