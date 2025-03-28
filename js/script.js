// SNACK NUMERO 1: BICICLETTE

// Creo un array di oggetti che conterrà il nome e il peso di 8 biciclette

const roadBike = [
    {
        name: 'Pinarello',
        weight: 6.2
    },
    {
        name: 'Bianchi',
        weight: 7.2
    },
    {
        name: 'Santa Cruz',
        weight: 6
    },
    {
        name: 'Specialized',
        weight: 8
    },
    {
        name: 'Cannodale',
        weight: 5.1
    },
    {
        name: 'Trek',
        weight: 8.6
    },
    {
        name: 'Colnago',
        weight: 7.6
    },
    {
        name: 'Scott',
        weight: 5.9
    }
]

// voglio stampare in console la bici con il peso minore
// creo un ciclo for

// dichiaro una variabile che conterrà il peso di ogni bici ad ogni giro del ciclo
// dichiaro una variabile che conterrà il peso minore

let min = roadBike[0].weight;
let minWeight;

for (let i = 0; i < roadBike.length; i++) {
    //verifico quale bici ha il peso miniore confrontando il peso ogni bici dell'array
    if (min > roadBike[i].weight) {
        minWeight = roadBike[i];
        min = roadBike[i].weight;
    }
}
// stampo il risultato in console
console.log(minWeight)



// SNACK NUMERO 2: SQUADRE DI CALCIO

/* creo un array di oggetti che conterrà 8 squadre di calcio della serie A, 
ciascuna delle quali avrà tre proprietà: nome, punti fatti, falli subiti.
I punti fatti e i falli subiti saranno generati randomicamente*/

const teams = [
    {
        name: 'Juventus',
        punti: 0,
        falli: 0
    },
    {
        name: 'Milan',
        punti: 0,
        falli: 0
        
    },
    {
        name: 'Catania',
        punti: 0,
        falli: 0
    },
    {
        name: 'Napoli',
        punti: 0,
        falli: 0
    },
    {
        name: 'Inter',
        punti: 0,
        falli: 0
    },
    {
        name: 'Atalanta',
        punti: 0,
        falli: 0
    },
    {
        name: 'Roma',
        punti: 0,
        falli: 0
    },
    {
        name: 'Lazio',
        punti: 0,
        falli: 0
    }
]

console.log(teams)