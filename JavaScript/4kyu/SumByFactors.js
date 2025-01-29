
document.getElementById('Button').addEventListener('click', () => {
    let primes = new Set();
    let final = {}
    const input = document.getElementById('numberInput').value
    const numbers = input.split(',')
    const result = document.getElementById('result')

    numbers.forEach(number => {
        for (let i = Math.ceil(number / 2); i > 1; i--) {
            if (number % i === 0) {
                let count = 0;
                for (let j = Math.ceil(i / 2); j > 1; j--) {
                    i % j === 0 ? count++ : ''
                }
                if (count === 0) {
                    primes.add(i)
                    if (final[i]) {
                        final[i] += parseInt(number)
                    } else {
                        final[i] = parseInt(number)
                    }
                }
            }
        }
    });
    let resultText = "Result:<br>"
    primes.forEach((prime) => {
        resultText += `Prime number: ${prime} Sum: ${final[prime]}<br>`
    })
    result.innerHTML = resultText
})

