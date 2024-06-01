const autos=`[
    {
        "modelo": "ford mustang",
        "produccion": 2010,
        "kilometraje": 1500

    },
    {
        "modelo": "Honda Accord",
        "produccion": 2021,
        "kilometraje": 4600

    },
    {
        "modelo": "Volkswagen Golf",
        "produccion": 2016,
        "kilometraje": 2000
    }
]`
console.log(typeof autos)
const jsonData= JSON.parse(autos)
console.log(typeof jsonData)

const autosNuevos= jsonData.filter((auto)=> auto.produccion>2010 && auto.kilometraje<5000);
console.log(autosNuevos)

const newCars= JSON.stringify(autosNuevos);
console.log(typeof newCars);

const fs= require (fs)
const autoNuevo={
        "modelo": "Ferrari sf90",
        "produccion": 2019,
        "kilometraje": 200
    }
const newCar= JSON.stringify (autoNuevo)
fs.writeFile('automoviles.Json', newCar, (error)=>{
    if (error) throw error;
    console.log("Informacion Recibida")
});
