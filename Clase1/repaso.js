/*
consolidar conocimientos de JavaScript, programación funcional, herencia por prototipos, clausuras, programación asíncrona, promesas, IIEF y ES5
escribir programas básicos en Node.JS, usar el REPL, usar módulos básicos como fs y http y objetos como EventEmitter
configurar el archivo package.json y usar npm para utilizar módulos desarrollados por la comunidad
crear un web server con Express.js y servir contenido estático, configurando sus diferentes opciones
crear servicios web para dar soporte a una aplicación que requiera servicios de ABM
diseñar y crear una API REST
*/

console.log("hola");

var a = "hola";
a = 1;

var b = true;
var c = false;

var flotante = 1.1;

var obj = {
	name:"Oscar",
	lastname:"Lopez",
	dni:1111111,

};

function saludar(){
	console.log("hola a todas");
}

saludar();

function saludar(alguien){
	console.log("Hola a",alguien);
}


function saludar(nombre){
	nombre();
}

var funcionNombre = function(){return "oscar"};
saludar(funcionNombre);


var carrito ={
	monto:10,
	facturar:function(){

	}
}


var list = [];

list.push(1);
list.push(2);
list.push({nombre:"Oscar"})

for(var i = 0; i < list.length; i++){
	console.log(list[i]);
}

list.forEach(function(item){
	console.log(item);
})

var text = "hola";

for(var j = 0; j < text.length; j++){
	console.log(text[j]);
}

