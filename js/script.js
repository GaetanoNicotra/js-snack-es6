// SNACK NUMERO 1: BICICLETTE

// Creo un array di oggetti che conterrà il nome e il peso di ciascuna bicicletta

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

// dichiaro una variabile che conterrà il peso minore
let min = [];
for (let i = 0; i < roadBike.length; i++) {
    min.push(roadBike[i].weight)
    //console.log()
    console.log(min)
}