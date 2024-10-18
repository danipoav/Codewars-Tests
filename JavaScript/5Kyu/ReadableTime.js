/**
 Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
 */

function calculate() {
    const num = document.getElementById('place').value;
    const result = document.getElementById('result');

    result.textContent = convert(num);

}

function convert(num) {

    let hours = Math.floor(num / 3600);
    let minutes = Math.floor((num % 3600) / 60);
    let secs = num % 60;

    return `Time converted: ${hours}:${minutes}:${secs}`;

}