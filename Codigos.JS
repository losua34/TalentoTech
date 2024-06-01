alert("Holandas");
//comentario una sola linea
/*no me sale en la pagina esto*/
/*var nombre= "Lorena";
var texto="Vas muy bien";
var numero= "458755";
var año ="2024";
var fecha ="14/10/1998";
alert(fecha)
console.log(nombre);
alert(año);
console.log(numero);
alert(texto);
//IM=PESO(KG)/ESTATURA(M);
var estatura= prompt ("Ingrese su estatura en metros");
var peso= prompt("Ingrese su peso en Kg");
var resultado= peso/estatura;
alert("su indice de masa corporal es: " + resultado);
//Calorias diarias=PESO (KG)/ESTATURA*NEAT;
var estatura= prompt ("Ingrese su estatura en metros");
var peso= prompt("Ingrese su peso en Kg");
var neat= prompt("Ingrese su neat numeros enteros");
var resultado= peso/estatura*neat;
alert("sus calorias diarias son: " + resultado);
//Calcule su descuento
/*var precio= prompt ("Ingrese precio");
var descuento= prompt("Ingrese porentaje descuento");
descuento=descuento/100;
resultado=cantidad-resultado;
alert("Resultado : " + resultado);*/

/*let mensaje
mensaje="¿Como estan?" 
alert(mensaje)
const COLOR_RED=""
let edad=prompt ("Ingresa tu edad")
alert("Tu edad es")
let b=confirm("Estas seguro de avanzar en el bootcamp")
alert(b)
console.log*/
//Condicionales
/*let c= parseInt (prompt("Ingresa un numero"))
if(c==5){
    alert("El numero que ingresaste es 0")
}else if(c===4){("El numero que ingresaste es 4")
}else{
    alert("No es correcto")
}
let  age=Number(prompt("Ingrese su edad",18));
let mensaje=""
if(age<18){
    mensaje="Eres menor de edad, ve a estudiar"
}else{
    mensaje="Eres mayor de edad, ve a trabajar"
}
alert(mensaje)*/

/*let numero=Number (prompt("Ingrese un numero"))
if(numero>=0){
    mensaje="Numero positivo"
}else{
    mensaje="Numero negativo"
}
alert(mensaje)*/

//Verificación acceso pagina web

/*let iniciaSesión =true;
let tienePermiso= false;
if(iniciaSesión||tienePermiso){
    alert ("Aceeso Permitido")
}else{
    alert("Acceso Denegado")
}*/

//Verificación dia de descanso 
/*let finDeSemana=(confirm("¿Es sabado o domingo?"))
let festivo=(confirm("¿Hoy es festivo"))
if(finDeSemana||festivo){
    alert("Relajate!!")
}else{
    alert("A trabajar!")
}*/

//Verificación para elegibilidad para descuento
/*let totalCompra=120;
let esMiembroPremium=false;
if(totalCompra>=100 && esMiembroPremium){
    alert("Tienes derecho a un descuento de 10%")
}else{
    alert("No eres elegible para descuento")
}*/

//Calificación
/*let Calificación=(confirm("¿Cuál fue tu calificación?"))
let 
if(Calificación<5 && Calificación){
    alert("Calificacion Insuficiente")
}else if(Calificación===5){
    alert("Calificación Sobresaliente")
}else if(Calificación>=8 && Calificación<=10){
    alert("Excelente!!")
}else if(Calificación>=7 && Calificación<=8){
    alert("Calificacion Suficiente!")
}else{
    alert("Numero no valido")
}*/

//Horario atención tienda
/*let horaActual=20
let abierto=horaActual<=18
if(abierto){
    alert("Estamos abiertos")
}else{
    alert("Estamos descansado")
}
//Verificacion Disponibilidad de asientos
let sillaDisponible=5;//tambien se puede poner =false//
if(!sillaDisponible){
    alert("No hay sillas por el momento")
}else{
    alert("Reserva tu silla")
}

//Verificar el numero mayor
let numero1=(prompt("Ingresa un numero"))
let numero2= (prompt("Ingresa el otro numero"))
if(numero1>numero2){
    alert(numero1+ "Este numero es mayor")
}else{(numero2<numero1)
    alert(numero2+ "Este numero es mayor"+numero)
}
//Multiplos
let Numero= (prompt("Ingrese el numero"))
let numeroOtro=()
let Multiplo=8
if (Numero % Multiplo== 0){
    alert("Este numero es multiplo de 3")
}else{
    alert("No es multiplo de 8")
}

//Numero primo
//Aceeso evento si es mayor de edad
let  age=Number(prompt("Ingrese su edad",18));
let mensaje=""
if(age<18){
    mensaje="¿Qué haces aqui? Eres menor de edad"
}else{
    mensaje="Eres mayor de edad, puedes entrar"
}
alert(mensaje)*/

//Boton que cambie de color la pagina web
/*document.getElementById=Utilizar para obtener una referencia a un elemento del documento html mediante su id
addEventListener= Para hacer referencia a un boton
function(Event)= para que ocurra en la interfaz del usuario*/
document.addEventListener('DOMContentLoaded',function(){
    var botonColor=document.getElementById('btnColor');
    botonColor.addEventListener('click',function(){
        document.body.style.backgroundColor='lightblue';
    });
});
//Alerta de Mnesaje
/*document.addEventListener('DOMContentLoaded',function(){
    var botonAlerta=document.getElementById('btnAlerta');
    botonAlerta.addEventListener('click',function(){
        alert("Hola programadores")
    });
});
//Verificacion Disponibilidad de asientos
document.addEventListener('DOMContentLoaded',function(){
    var botonVerificar=document.getElementById('btnVerificar');
    botonVerificar.addEventListener('click',function(){
        alert("No hay disponibilidad")
    });
});
//Horario tienda
document.addEventListener('DOMContentLoaded',function(){
    var botonHora=document.getElementById('btnHora');
    botonHora.addEventListener('click',function(){
        alert("Nos fuimos")
    });
});
//Trabajar o no?
document.addEventListener('DOMContentLoaded',function(){
    var botonDiaLaboral=document.getElementById('btnDia');
    botonDiaLaboral.addEventListener('click',function(){
        alert("Debes trabajar :(")
    });
});
//Verificación acceso pagina web
document.addEventListener('DOMContentLoaded',function(){
    var botonInicio=document.getElementById('btnInicio');
    botonInicio.addEventListener('click',function(){
        alert("¡Alto ahi!¡No puedes entrar amiga!")
    });
});*/
//Superficie de un terreno 
/*let ancho=10;
let alto=15;
let resultado= ancho*alto;
alert(resultado)*/
/*function calcualrSuperficie(alto, ancho){
    let ancho=10;
    let alto=15;
    let resultado= ancho*alto;
    alert(resultado)
}
calcualrSuperficie()*/
/*function calcualrSuperficie(alto, ancho){
    let resultado= ancho*alto;
    alert(resultado) 
}
calcualrSuperficie(5,12)
calcualrSuperficie(20,2)
calcualrSuperficie(6,15);

function square(nume){
    let resultado= nume*nume;
    alert(resultado)
}
square(5);
//Area rectangulo
function calcualrSuperficie(base, altura){
    let resultado= base*altura;
    alert(resultado) 
}
calcualrArea(7,22)
function calcualrArea(base, altura){
    let resultado= base*altura/2;
    alert(resultado) 
}
calcualrArea(87,22)
//Funcion anonima emdiante expresion
const multiplicar=function(a,b){
    let resultado=a+b;
    alert(resultado)
}
multiplicar(3,5)
//funcion flecha (arrow)
const calcualrTrinagulo=(base,altura)=>{
    let resultado = (base*altura)/2
    alert(resultado)
}
calcualrArea(87,2)*/
//Bucles while
var contador=0
while(contador<3){
    alert("valor: "+contador)
    contador ++
}

//do while
/*var contador=0
do{
    alert("valor :" + contador)
    contador ++
}while(contador<7)

    let suma=0;
    let i=1;
    while(i<=10){
        suma+=i
        i++
      
    }
    alert("la suma es: "+ suma)
    //for
    for(let i=o; i<5;i++){
        alert("Interacción numero: " + i)
    }
    //tabla multiplicar
    function tablaMultiplicarFor(){
        for (let multiplicador=1; multiplicador<=10;
        multiplicador++){
            const result=3* multiplicador;
            alert('3 * $ {')
        }
    }
    const miObjeto={ a:1, b:2, c:3 }
    for(const key in miObjeto){
        alert(key+" : " + miObjeto[key]);
    }*/

    /*const datosPais={ pais: "Colombia", capital:"Bogotá", población: 52000000
    }
    for(const key in datosPais){
        alert(key+ " : "+ datosPais [key]);
    }


    function tablaMultiplicarFor(){
        for (let multiplicador=1; multiplicador<=10;
        multiplicador++){
            const result=3* multiplicador;
            alert('3= $ {multiplicador}=$}resultado})
        }
    }*/
    //calcular porcentaje
     const calcularPorcentaje=(cantidad,porcentaje)=>{
        let resultado=(cantidad*porcentaje)/100
        alert(resultado)
     }
     calcularPorcentaje(1500000,8)

     // datospersona
     /*const datosPersona={ nombre: "Sandra", apellido:"Martinez", sexo: "femenino", documento: "51777444"
    }
    for(const key in datosPersona){
        alert(key+ " : "+ datosPersona [key]);
    }*/
  
    //funcion calulcar el area de un circulo
    function areaCirculo(radio){
        return Math.PI *radio*radio;
    } 
    alert(areaCirculo(5))

    