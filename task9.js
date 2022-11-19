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
//9. Sort the array in ascending order in one of the following ways: bubble sort, selection sort or insertion sort.
const itemsCount9 = getNumberFromUser(`Please enter the number:`);
const array9 = [];
for (let index = 0; index < itemsCount9; index++) {
    array9[index] = getRandomNumber(0, 100);
    console.log(array9[index]);
}

for (let i = 0; i < array9.length - 2; i++) {
    little = i;
    for (let j = i; j < array9.length; j++) {
        if (array9[j] < array9[little]) {
            little = j;
        }
    }
    temp = array9[little];
    array9[little] = array9[i];
    array9[i] = temp;
}
console.log(array9)