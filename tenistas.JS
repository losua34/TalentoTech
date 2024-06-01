const tenistas=`[
    {
        "Nombre": "Novak Djokovic",
        "Ranking": 1,
        "Puntaje": 9960

    },
    {
        "Nombre": "Jannik Sinner",
        "Ranking": 2,
        "Puntaje": 8770

    },
    {
        "Nombre": "Alexander Zverev",
        "Ranking": 4,
        "Puntaje": 6305

    },
    {
        "Nombre": "Casper Ruud",
        "Ranking": 7,
        "Puntaje": 4425

    },
    {
        "Nombre": "Stefanos Tsitsipas",
        "Ranking": 9,
        "Puntaje": 3700

    },
    {
        "Nombre": "Taylor Fritz",
        "Ranking": 11,
        "Puntaje": 2980
    }
]`

console.log(typeof tenistas)
const jsonData= JSON.parse(tenistas)
console.log(typeof jsonData)

const rankingBajo= jsonData.filter ((tenista)=> tenista.Ranking >5 && tenista.Puntaje <5000)
console.log (rankingBajo)

const fs= require ('fs')
const entradaNueva ={
        "Nombre": "Carlos Alcaraz",
        "Ranking": 3,
        "Puntaje": 7300

    } 
const nuevoJugador= JSON.stringify (entradaNueva)
fs.writeFile('tenistas.Json', nuevoJugador, (error)=>{
    if (error) throw error;
    console.log("Informacion Recibida")
});