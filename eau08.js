const displayError = () => {
    if (process.argv.length !== 3) {
        console.log("Erreur : Le programme nécessite un argument.")
        process.exit(1)
    }

    if (typeof process.argv[2] !== "string") {
        console.log("Erreur : L'argument doit être une chaîne de caractères.")
        process.exit(1)
    }
}

const containsOnlyDigits = () => {
    const str = process.argv[2]

    return /^\d+$/.test(str)
}

displayError()
console.log(containsOnlyDigits())
