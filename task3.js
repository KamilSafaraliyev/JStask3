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
//3. Find the index of the minimum element of this array
const itemsCount3 = getNumberFromUser(`Please enter the number:`);
const array3 = [];
for (let index = 0; index < itemsCount3; index++) {
    array3[index] = getRandomNumber(0, 100);
    console.log(array3[index]);
}
let minimum = array3[0];
for (let i = 1; i < array3.length; i++) {
    if (array3[i] < minimum) {
        minimum = array3[i];
        index = i
    }
}
console.log(`Minimum element of this array: ${minimum}`);
console.log(`index of the minimum element of this arra: ${index}`);