const displayError = (array) => {
    if (!Array.isArray(array)) {
        console.log("Erreur : L'argument doit être un tableau.")
        process.exit(1)
    }

    if (array.length < 2) {
        console.log("Erreur : Le tableau doit contenir au moins deux éléments.")
        process.exit(1)
    }

    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i]) || typeof array[i] !== "number") {
            console.log("Erreur : Le tableau doit contenir uniquement des nombres.")
            process.exit(1)
        }
    }
}
const findMinAbsoluteDifference = (array) => {
    let minDiff = Infinity

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const diff = Math.abs(array[i] - array[j]);
            minDiff = Math.min(minDiff, diff)
        }
    }

    return minDiff
}

const args = process.argv.slice(2).map(Number)

displayError(args)
console.log(findMinAbsoluteDifference(args))
