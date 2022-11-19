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
//4. Find the index of the maximum element of this array
const itemsCount4 = getNumberFromUser(`Please enter the number:`);
const array4 = [];
for (let index = 0; index < itemsCount4; index++) {
    array4[index] = getRandomNumber(0, 100);
    console.log(array4[index]);
}
let maximum = array4[0];
for (let i = 1; i < array4.length; i++) {
    if (array4[i] > maximum) {
        maximum = array4[i];
        index = i
    }
}
console.log(`Minimum element of this array: ${maximum}`);
console.log(`Index of the maximum element of this array: ${index}`);