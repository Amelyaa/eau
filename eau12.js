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

const bubbleSort = (array) => {
    const newArray = array.slice() // Création d'une copie du tableau d'origine

    for (let i = 0; i < newArray.length - 1; i++) {
        for (let j = 0; j < newArray.length - 1 - i; j++) {
            if (newArray[j] > newArray[j + 1]) {
                // Échange les éléments si nécessaire
                const temp = newArray[j]
                newArray[j] = newArray[j + 1]
                newArray[j + 1] = temp
            }
        }
    }

    return newArray
}

const args = process.argv.slice(2).map(Number)

displayError(args)

const result = bubbleSort(args)
console.log(result.join(" "))
