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