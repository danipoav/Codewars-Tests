/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

const boxResult = document.getElementById('result');

const array = [false, 0, 0, 1, 0, 1, 2, 0, 1, 3, "a"];
const newArray = [];
let numZeros = 0;

const arrayFunc = (array) => {

    array.forEach(item => {
        if (item === 0) {
            numZeros++;
        } else {
            newArray.push(item);
        }
    });

    for (let i = 0; i < numZeros; i++) {
        newArray.push(0);
    }

    return newArray;

}
const result = arrayFunc(array);
const p1 = document.createElement('p')
const p2 = document.createElement('p');
p1.textContent = `Array without moving zeros: ${JSON.stringify(array)}`
p2.textContent = `Array moving zeros to the right: ${JSON.stringify(result)}`
boxResult.appendChild(p1);
boxResult.appendChild(p2);

