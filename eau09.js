const displayError = (min, max) => {
    if (process.argv.length !== 4) {
        console.log("Erreur : Le programme nécessite deux arguments.")
        process.exit(1)
    }

    if (isNaN(min) || isNaN(max)) {
        console.log("Erreur : Les arguments doivent être des nombres.")
        process.exit(1)
    }
}

const displayRange = (min, max) => {
    const start = Math.min(min, max)
    const end = Math.max(min, max)

    for (let i = start; i < end; i++) {
        console.log(i)
    }
}

const min = parseInt(process.argv[2])

const max = parseInt(process.argv[3])

displayError(min, max)
displayRange(min, max)
