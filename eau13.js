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

const selectionSort = (array) => {
    const newArray = array.slice() // Création d'une copie du tableau d'origine

    for (let i = 0; i < newArray.length - 1; i++) {
        let minIndex = i

        for (let j = i + 1; j < newArray.length; j++) {
            if (newArray[j] < newArray[minIndex]) {
                minIndex = j
            }
        }

        // Échange l'élément courant avec l'élément de valeur minimale
        const temp = newArray[i]
        newArray[i] = newArray[minIndex]
        newArray[minIndex] = temp
    }

    return newArray
}

const args = process.argv.slice(2).map(Number)

displayError(args)

const result = selectionSort(args)
console.log(result.join(" "))
