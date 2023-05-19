const isPrimeNum = (num) => {
    if (num <= 1) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}

const getNextPrimeNum = (num) => {
    if (isNaN(num) || num < 0) {
        return -1
    }

    let next = num + 1

    while (!isPrimeNum(next)) {
        next++
    }

    return next
}

const n = parseInt(process.argv[2])
console.log(getNextPrimeNum(n))
