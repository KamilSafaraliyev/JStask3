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
//7. Count the number of odd elements in the array
const itemsCount7 = getNumberFromUser(`Please enter the number:`);
const array7 = [];
for (let index = 0; index < itemsCount7; index++) {
    array7[index] = getRandomNumber(0, 100);
    console.log(array7[index]);
}
let number = 0;
for (let i = 0; i < array7.length; i++) {
    if (array7[i] % 2) {
        number++;
    }
}
console.log("Count the number of odd elements in the array:" + number);