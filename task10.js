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
//10. Sort the array in descending order in one of the ways: bubble sort, selection sort or insertion sort.
const itemsCount10 = getNumberFromUser(`Please enter the number:`);
const array10 = [];
for (let index = 0; index < itemsCount10; index++) {
    array9[index] = getRandomNumber(0, 100);
    console.log(array10[index]);
}

for (let i = 0; i < array10.length - 2; i++) {
    large = i;
    for (let j = i; j < array10.length; j++) {
        if (array10[j] > array10[large]) {
            large = j;
        }
    }
    temp = array10[large];
    array10[large] = array10[i];
    array10[i] = temp;
}
console.log(array10)