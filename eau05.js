const displayError = () => {
    if (process.argv.length !== 4) {
        console.log("Erreur : Le programme nécessite deux arguments.")
        process.exit(1)
    }

    if (typeof process.argv[2] !== 'string' || typeof process.argv[3] !== 'string') {
        console.log("Erreur : Les arguments doivent être des chaînes de caractères.")
        process.exit(1)
    }
}

const checkStringExist = () => {
    const str = process.argv[2]
    const strSearch = process.argv[3]

    return str.includes(strSearch)
}

displayError()

console.log(checkStringExist())
