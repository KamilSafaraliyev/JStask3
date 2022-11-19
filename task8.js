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
//8. Swap the first and second half of the array, for example, for an array of 1234, the result is 3412, or for 12345 the result will be 45312.
const itemsCount8 = getNumberFromUser(`Please enter the number:`);
const array8 = [];
for (let index = 0; index < itemsCount8; index++) {
    array8[index] = getRandomNumber(0, 10001);
    console.log(array8[index]);
}

for (let i = 0; i < array8.length / 2; i++) {
    let temp = array8[array8.length / 2 + i];
    array8[array8.length / 2 + i] = array8[i];
    array8[i] = temp;
}
console.log(array8)