const displayError = (array) => {
    if (!Array.isArray(array)) {
        console.log("Erreur : L'argument doit être un tableau.")
        process.exit(1)
    }

    if (array.length < 2) {
        console.log("Erreur : Le tableau doit contenir au moins deux éléments.")
        process.exit(1)
    }
}

const sortAscii = (array) => {
    const newArray = array.slice() // Création d'une copie du tableau d'origine

    newArray.sort((a, b) => a.localeCompare(b, 'en', {sensitivity: 'base'}))

    return newArray
}

const args = process.argv.slice(2)

displayError(args)

const result = sortAscii(args);
console.log(result.join(" "))
