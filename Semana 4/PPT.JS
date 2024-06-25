//let opciones = ["piedra", "papel", "tijera"];
let opciones = [0, 1, 2];
let eleccionMaquina;

function aleatorio(minimo, maximo){
    let numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}

function usuario(eleccionUsuario){
    eleccionUsuario = parseInt(eleccionUsuario);
    eleccionMaquina = aleatorio(0,2);
    alert(eleccionUsuario);
    alert(eleccionMaquina);

    if(eleccionUsuario == 0){//el usuario eligio piedra 
        if(opciones[eleccionMaquina] == 1){//si la maquina eligio papel 
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3> Elegiste piedra y la maquina papel.</h3>';
        }else{
            if(opciones[eleccionMaquina] == 2){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3> Elegiste piedra y la maquina tijera.</h3>';
            }else{
                if(opciones[eleccionMaquina] == 0){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3> Piensan igual, ambos eligieron piedra.</h3>';
                }
            }
        } 
    }

    if(eleccionUsuario == 1){//el usuario eligio papel 
        if(opciones[eleccionMaquina] == 2){
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3> Tu elegiste papel y la maquina tijera.</h3>';
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>Tu elegiste papel y la maquina piedra.</h3>';
                
            }else{
                if(opciones[eleccionMaquina] == 1){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>'; 
                }
            }
        }
    }

    if(eleccionUsuario == 2) {//el usuario eligio tijera 
        if(opciones[eleccionMaquina] == 1){
            document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>';
        
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>'; 
            }else{
                if(opciones[eleccionMaquina] == 2) {
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>';
                }
            }
        }
    }

    document.getElementById('efecto').style.display = "";
}



function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
}