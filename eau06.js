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

const capitalizeEveryTwoLetters = () => {
    const str = process.argv[2]
    let result = ""

    for (let i = 0; i < str.length; i++) {
        const char = str[i]

        if (/[a-zA-Z]/.test(char)) {
            if (i % 2 === 0) {
                result += char.toUpperCase()
            } else {
                result += char.toLowerCase()
            }
        } else {
            result += char
        }
    }

    return result
}

displayError()
console.log(capitalizeEveryTwoLetters())
