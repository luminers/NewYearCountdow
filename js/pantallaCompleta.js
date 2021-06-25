var elem = document.documentElement;
const barra=document.getElementById("cuerpo")
const icono=document.getElementById("btn");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    icono.style.visibility='hidden';
    barra.style.overflow="hidden";
  } else if (elem.webkitRequestFullscreen) { 
    elem.webkitRequestFullscreen();
    icono.style.visibility='hidden';
    barra.style.overflow="hidden";
  } else if (elem.msRequestFullscreen) { 
    elem.msRequestFullscreen();
    icono.style.visibility='hidden';
    barra.style.overflow="hidden";
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    icono.style.visibility='visible';  
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
    icono.style.visibility='visible';
  } else if (document.msExitFullscreen) { 
    document.msExitFullscreen();
    icono.style.visibility='visible';
  }
}