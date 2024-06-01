let opciones = [0, 1, 2];
let maquinaElige;

function maquina(minimo, maximo){
    let numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}

function usuario(usuarioElige){
    usuarioElige = parseInt(eleccionUsuario);
    maquinaElige = aleatorio(0,2);
    alert(usuarioElige);
    alert(maquinaElige);

    if(usuarioElige == 0){//Usuario elige piedra 
        if(opciones[maquinaElige] == 1){//La maquina elige papel 
            document.getElementById('efecto').innerHTML ='<h1>¡Mala sueste!</h1> <h3> Sigue intentando.</h3>';
        }else{
            if(opciones[maquinaElige] == 2){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>¡Felicitaciones!</h3>';
            }else{
                if(opciones[maquinaElige] == 0){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Mentes brillantes piensan igual</h3>';
                }
            }
        } 
    }

    if(usuarioElige == 1){//Usuario elige papel 
        if(opciones[maquinaElige] == 2){//Maquina elige tijera
            document.getElementById('efecto').innerHTML ='<h1>¡Mala sueste!</h1> <h3> Sigue intentando.</h3>';
        }else{
            if(opciones[maquinaElige] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>¡Eres lo maximo!</h3>';
                
            }else{
                if(opciones[maquinaElige] == 1){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Mentes brillantes piensan igual</h3>'; 
                }
            }
        }
    }

    if(usuarioElige == 2) {//el usuario eligio tijera 
        if(opciones[maquinaElige] == 1){
            document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3> ¡Sigue jugando para ganar más!</h3>';
        
        }else{
            if(opciones[maquinaElige] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Mala sueste!</h1> <h3> Sigue intentando.</h3>'; 
            }else{
                if(opciones[maquinaElige] == 2) {
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3> Mentes brillantes piensan igual</h3>';
                }
            }
        }
    }

    document.getElementById('efecto').style.display = "";
}

function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
}
