const displayError = () => {
    if (process.argv.length < 3) {
        console.log("Erreur : Le programme nécessite au moins deux arguments.")
        process.exit(1)
    }

    if (typeof process.argv[process.argv.length - 1] !== "string") {
        console.log("Erreur : Le dernier argument doit être une chaîne de caractères.")
        process.exit(1)
    }
}

const findIndexOfElement = (array, element) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i
        }
    }

    return -1
}

displayError()

const args = process.argv.slice(2)
const array = args.slice(0, -1)
const element = args[args.length - 1]

console.log(findIndexOfElement(array, element))
