let contenedor = document.createElement('div');
document.body.appendChild(contenedor).className = 'contenedor';
let createCanvas = document.createElement('canvas');
contenedor.appendChild(createCanvas).className = 'canvas';
canvas = document.querySelector('.canvas');
ctx = canvas.getContext('2d');
let creandoBtn = document.createElement('button');
contenedor.appendChild(creandoBtn).className = 'tirar';
const btn = document.querySelector('.tirar');
btn.innerText = "Tirar el dado";



btn.addEventListener('click',()=>{
	numero = Math.floor((Math.random() * (7-1)) + 1);
	ctx.clearRect(0,0,canvas.width,canvas.height);
	numeroRandom();
	
	
	console.log(numero);
})






function numeroRandom (){
	if (numero === 1){
		ctx.beginPath();
		ctx.arc(150,75,20,0,Math.PI*2);
		ctx.fill();
	} if (numero === 2){
		ctx.beginPath();
		ctx.arc(25,25,20,0,Math.PI*2);
		ctx.arc(270,125,20,0,Math.PI*2);
		ctx.fill();
	} if (numero === 3){
		ctx.beginPath();
		ctx.arc(25,25,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(150,75,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(270,125,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
	} if (numero === 4){
		ctx.beginPath();
		ctx.arc(25,25,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(270,125,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(270,25,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(25,125,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
	} if (numero === 5){
		ctx.beginPath();
		ctx.arc(25,25,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(270,125,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(270,25,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(25,125,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(145,80,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
	} if (numero === 6){
		ctx.beginPath();
		ctx.arc(25,25,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(270,125,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(270,25,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(25,125,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(25,75,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(270,75,20,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
		
	}
}