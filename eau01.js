const addZero = (num) => {
    return num.toString().padStart(2, '0')
}

const num2Combination = () => {
    for (let num1 = 0; num1 <= 98; num1++) {
        for (let num2 = num1 + 1; num2 <= 99; num2++) {
            console.log(`${addZero(num1)} ${addZero(num2)}`)
        }
    }
}

num2Combination()
