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

//2. Find the maximum element of this array
const itemsCount2 = getNumberFromUser(`Please enter the number:`);
const array2 = [];
for (let index = 0; index < itemsCount2; index++) {
    array2[index] = getRandomNumber(0, 100);
    console.log(array2[index]);
}
let maximum = array2[0];
for (let i = 1; i < array2.length; i++) {
    if (array2[i] > maximum) {
        maximum = array2[i];
    }
}
console.log(`Maximum element of this array: ${maximum}`);