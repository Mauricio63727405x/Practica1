//variables
var X = 15
let Z = [5]
const Q = "hola mundo"
console.log(X,Z[0],Q)
//alcance de variables
function a (Z){
    var Z=15
}
var P=30
console.log(X,a)
//tipo de datos
var datos ={
    nombre: "venom",
    año: 2023,
    director:"marvel",
    protagonista:"tom hardy",
    antagonista: "duende verde"
}
console.log(datos.nombre,datos.año,
    datos.director,datos.protagonista,datos.antagonista)
//operadores
var A = 20
var W = 10
console.log(A+W,A-W,A*W,A/W)
//condicionales
let miArray = [1, 2, 3, 4, 5, 6]; 
if (miArray.length > 5) {
    console.log("El array es grande");
} else {
    console.log("El array es pequeño");
}
//bubles
let H=[9,8,7,6]
for(let i=0;i<H.length;i++){
    console.log(H[i])
}
//funciones
function saludar (nombre){
    console.log(nombre)
}
saludar("hello")
//objetos
const persona ={
    nombre:"julio",
    edad: 20,
    apellido: "Quiñonez",
    genero: "hombre"
}
function obj (persona){
    console.log(persona.nombre)
}
obj(persona)
//arreglos
var verduras =["zanahoria","lechuga","tomate"]
for(var verduras of verduras){    
    console.log(verduras)
}
//ejercicio combinado
var arr=[5,4,3,2]
function sum (arr){
    var result=0
    for(var i=0;i<arr,length;i++){
        result=result+arr[i]
    }
    console.log(result)
}
//funciones de fecha
const suma =(x,y)=>x +y
var resultado =suma(20,10)
console.log(resultado)
//metodo string
var str="hola mundo"
console.log(str.charAt(5))
//metodo array
var deporte =['wally','beisbol', 'futsal','basquetbol']
deporte.push('balon mano')
console.log(deporte[4])
