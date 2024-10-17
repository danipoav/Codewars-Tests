/*
Your job is to write the JSON_Date_reviver() function to return a real Date object when the value passed in is one of those date strings. If it is not a "date string", however, the original value should be returned as-is.

For reference, here are some example "date strings":

"2014-04-01T18:51:35.275Z"
"1994-10-03T07:48:15.704Z"
"1986-12-24T03:49:25.419Z"
"+198456-09-18T00:02:27.626Z"
"-260424-08-20T15:37:04.134Z"
"+080521-01-20T03:54:16.348Z"
*/

const boxResult = document.getElementById('result');

function JSON_Date_reviver(value) {
    if (typeof value === 'string' && /^\+?\-?\d{4,6}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/) {
        return new Date(value)
    } else {
        return value
    }
}

const dateStrings = [
    "2014-04-01T18:51:35.275Z",
    "No soy fecha",
    "1994-10-03T07:48:15.704Z",
    "1986-12-24T03:49:25.419Z",
    27632,
    127365123000000,
    "+198456-09-18T00:02:27.626Z",
    "-260424-08-20T15:37:04.134Z",
    "+080521-01-20T03:54:16.348Z"
];

dateStrings.forEach(element => {

    const result = JSON_Date_reviver(element);
    if (result instanceof Date && !isNaN(result)) {
        const p = document.createElement('p');
        p.textContent = `String to Date: ${result}`;
        boxResult.appendChild(p);
    }
});