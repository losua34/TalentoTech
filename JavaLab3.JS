let c= parseInt(prompt("Ingrese numero de la semana"));
let dia=" "
switch(c){
    case 1:
        dia= "Es dia Lunes"
    break;
    case 2:
         dia="Es dia martes"
    break;
    case 3:
        dia="Es dia miercoles"
    break
    case 4:
        dia="Es dia jueves"
    break
    case 5:
        dia="Es dia viernes"
    break
    case 6:
        dia="Es dia sabado"
    break
    case 7:
        dia="Es dia domingo"
    break
    }
    alert(dia)


    let resultado= parseInt(prompt("Ingrese un numero"))
    let numero= parseInt(resultado % 2);
    let mensaje=""
    if (numero===0){
        mensaje="Numero par"
    }
    else {
        mensaje="Numero impar"
    }
    alert(mensaje)
   
    let laborday= (prompt("Ingrese dia de la semana"));
    let atencion=""
    if  (laborday="Lunes, Martes, Miercoles, Jueves, Viernes"){ 
       atencion= "Dia Laboral"
    } 
    else{
        atencion= "Dia no laboral"
    }
    alert(atencion)
  