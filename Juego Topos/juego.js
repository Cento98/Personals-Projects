
let alea;
var tiempo=3000;
var perder=0;
var pierdes=2000;
let interval;
var contador = 0;
var contador2=0;
var nododetexto;

var puntuacion=document.getElementById("puntos");

function inicio(){
    location.href="juego.html";
    juego();
}
window.onload=function(){
    var strings = location.href.split("/");
    if(strings[strings.length-1]=="juego.html"){
        juego();
    }

    if(location.href=="http://127.0.0.1:5500/gameover.html"){
        if(sessionStorage.getItem("contador")!=null){
            contador2=sessionStorage.getItem("contador");
            puntuacion.innerHTML="";
            nododetexto=document.createTextNode("Tu puntuacion: "+String(contador2));
            puntuacion.appendChild(nododetexto);
        }  
    }
}


function juego(){ 
  
    alea=Math.floor(Math.random()*(4-1)+1);

    switch(alea){
        case 1:
                document.getElementById("r1").style.visibility="visible";
                interval=setInterval(gameover, 1);
        break;
        case 2:
                document.getElementById("r2").style.visibility="visible";
                interval=setInterval(gameover, 1);
        break;
        case 3:
                document.getElementById("r3").style.visibility="visible";
                interval=setInterval(gameover, 1);
        break;
        case 4:
                document.getElementById("r4").style.visibility="visible";
                interval=setInterval(gameover, 1);
        break;
        default:
            alert("Capasao?");
        break;
    }
}


function esconder1(){
    if(document.getElementById("r1").style.visibility=="visible"){
        clearInterval(interval);
        perder=0;
        document.getElementById("r1").style.visibility="hidden";
    if(tiempo>=400){
        tiempo-=100;
    }
    if(pierdes>=400){
        pierdes-=100;
    }
    else{
        pierdes-=10;
    }
    document.getElementById('contador').innerHTML = contador += 1;
    setTimeout(juego, tiempo);
    }
    
}
function esconder2(){
    if(document.getElementById("r2").style.visibility=="visible"){
        clearInterval(interval);
        perder=0;
        document.getElementById("r2").style.visibility="hidden";
    if(tiempo>=400){
        tiempo-=100;
    }
    if(pierdes>=400){
        pierdes-=100;
    }
    else{
        pierdes-=10;
    }
    document.getElementById('contador').innerHTML = contador += 1;
    setTimeout(juego, tiempo);
    }
}
function esconder3(){
    if(document.getElementById("r3").style.visibility=="visible"){
        clearInterval(interval);
        perder=0;
        document.getElementById("r3").style.visibility="hidden";
    if(tiempo>=400){
        tiempo-=100;
    }
    if(pierdes>=400){
        pierdes-=100;
    }
    else{
        pierdes-=10;
    }
    document.getElementById('contador').innerHTML = contador += 1;
    setTimeout(juego, tiempo);
    }
    
}
function esconder4(){
    if(document.getElementById("r4").style.visibility=="visible"){
        clearInterval(interval);
        perder=0;
        document.getElementById("r4").style.visibility="hidden";
    if(tiempo>=400){
        tiempo-=100;
    }
    if(pierdes>=400){
        pierdes-=100;
    }
    else{
        pierdes-=10;
    }
    document.getElementById('contador').innerHTML = contador += 1;
    setTimeout(juego, tiempo);
    }
}

function gameover(){
    perder+=1;
    if(perder>=pierdes){
        sessionStorage.setItem("contador", contador);
        clearInterval(interval);
        location.href="gameover.html";
    }
}



