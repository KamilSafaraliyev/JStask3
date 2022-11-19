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
//6. Reverse this array (array in reverse direction) - you have to create YOUR OWN function, which WILL NOT create any new array
const itemsCount6 = getNumberFromUser(`Please enter the number:`);
const array6 = [];
for (let index = 0; index < itemsCount6; index++) {
    array6[index] = getRandomNumber(0, 100);
    console.log(array6[index]);
}
const reversed = array6.reverse();
console.log("reversed:", reversed);