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
//5. Calculate the sum of array's elements with odd indices
const itemsCount5 = getNumberFromUser(`Please enter the number:`);
const array5 = [];
for (let index = 0; index < itemsCount5; index++) {
    array5[index] = getRandomNumber(0, 100);
    console.log(array5[index]);
}
let sum = 0;
for (let i = 1; i < array5.length; i += 2) {
    sum = array5[i] + sum;
}
console.log("sum of array's elements with odd indicessum:" + sum)