/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/


//Solucion 
function arrayDiff(a, b) {
    return a.filter(item => !b.includes(item));
}

//Problema
function showResult() {

    const getResults = document.getElementById('results');

    const array = [
        { a: [1, 2], b: [1] },
        { a: [1, 2, 2], b: [1] },
        { a: [1, 2, 2], b: [2] },
        { a: [1, 2, 2], b: [] },
        { a: [], b: [1, 2] },
        { a: [1, 2, 3], b: [1, 2] },
    ];

    array.forEach((element, index) => {
        const result = arrayDiff(element.a, element.b)
        const p = document.createElement('p');
        p.textContent = `The Array that contents A ${JSON.stringify(element.a)} and B ${JSON.stringify(element.b)} this is the result ${JSON.stringify(result)}`;
        getResults.appendChild(p);
    });

}
showResult();
