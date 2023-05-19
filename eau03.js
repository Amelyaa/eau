const detectNFibonacci = (num) => {
    if (isNaN(num) || num < 0) {
        return -1
    } else if (num === 0) {
        return 0
    } else if (num === 1 || num === 2) {
        return 1
    } else {
        let fib
        let prev = 1
        let curr = 1

        for (let i = 3; i <= num; i++) {
            fib = prev + curr
            prev = curr
            curr = fib
        }

        return fib
    }
}

const num = parseInt(process.argv[2])
console.log(detectNFibonacci(num))
