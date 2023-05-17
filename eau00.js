//On vérifie chaque chiffre et non un nombre entier et on concatène le tout
//vu que c'est imbriqué on fait +1 à chaque fois pour éviter les doublons

const num3Combination = () => {
    for (let i = 0; i <= 7; i++) {
        for (let j = i + 1; j <= 8; j++) {
            for (let k = j + 1; k <= 9; k++) {
                console.log(`${i}${j}${k}`)
            }
        }
    }
}

num3Combination()
