//convertir grados celsius a Fahrenheit 
function calcularGrados(centi, fare){
    var centi = prompt("Ingrese los grados centigtrados")
    var fare = (9/5*centi)+32
        alert(fare)
    }  
    calcularGrados (25)

    //Funcion para verificar si un numero es par
    var numero = prompt("Ingrese un numero");
    
    if(numero%2==0){
        
        alert("El número "+numero+" es par");
    
    }else{
        
        alert("El número "+numero+" es impar");
    } 
    //Numero maximo o mayor 
    var num1=prompt("Ingresa el primer numero: ");
    var num2=prompt("Ingresa el segundo numero: ");
    if(num1>num2){
    alert(num1+" Es el mayor.")
    }else{
    alert(num2+" Es el mayor.")
    }
    //contar numero vocales en cadena 
    function contarVocales(cadena){
        let busqueda= cadena.match(/[aeiou]/gi).length
        alert("El numero de vocales que tiene la palabra son: "+ busqueda)
    }
    contarVocales("Lorena Suarez")

//bucle for imprimir numeros 1-5
    for(let i=1; i<5;i++){
        alert("Imprimir : " + i)
    }
//bucle while para sumar numeros 1-5
  
  
//bublce do while para imprimir numeros impares menores que 10

//bucle for in para mistrar las propiedades de un objeto
const miObjeto={ a:Cabeza, b:Hombros, c:Rodillas, d:Pies }
    for(const key in miObjeto){
        alert(key+" : " + miObjeto[key]);
    }

//buble para iterar sobre un array 
const frutas