const args = process.argv.slice(2)

const displayError = () => {
    if (args.length === 0) {
        console.log("Erreur : Le programme nécessite au moins un argument.");
        process.exit(1)
    }
}

//On parcourt el tableau à l'envers et on affiche les arguments à l'envers
const reverseArgs = () => {
    for (let i = args.length - 1; i >= 0; i--) {
        console.log(args[i])
    }
}

displayError()
reverseArgs()
