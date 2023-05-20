const displayError = () => {
    if (process.argv.length !== 3) {
        console.log("Erreur : Le programme nécessite un argument. Utilisez les guillemets si l'argument contient des espaces.")
        process.exit(1)
    }

    if (typeof process.argv[2] !== "string" || !isNaN(process.argv[2])) {
        console.log("Erreur : L'argument doit être une chaîne de caractères.")
        process.exit(1)
    }
}

const capitalizeFirstLetterOfEachWord = () => {
    const str = process.argv[2]
    const words = str.split(/[\s\t\n]+/)

    const capitalizedWords = words.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase()
        const restOfWord = word.slice(1).toLowerCase()
        return firstLetter + restOfWord
    })

    return capitalizedWords.join(" ")
}

displayError()
console.log(capitalizeFirstLetterOfEachWord())
