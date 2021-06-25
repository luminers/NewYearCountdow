const diasId= document.getElementById("dias");
const horasId= document.getElementById("horas");
const minutosId= document.getElementById("minutos");
const segundosId= document.getElementById("segundos");

function contador(){
    const fechaAnioNuevo= new Date("January 1, 2022 00:00:00");
    const fechaActual= new Date();
    const diferencia=fechaAnioNuevo-fechaActual;
   
    const segundos=Math.floor(diferencia/1000)%60;
    
    const dias=Math.floor( diferencia/(1000*60*60*24) );

    const minutos=Math.floor( (diferencia/1000/60) %60 );

    const horas= Math.trunc( (diferencia/(1000*60*60)) % 24);

    diasId.innerHTML=dias;
    
    if (horas<10) {
        horasId.innerHTML="0"+horas;   
    }else{
        horasId.innerHTML=horas;
    }
    
    if (minutos<10) {
        minutosId.innerHTML="0"+minutos;
    }else{
        minutosId.innerHTML=minutos;
    }

    if (segundos<10) {
        segundosId.innerHTML="0"+segundos;
    }else{
        segundosId.innerHTML=segundos;
    }
}

//*Llamada inicial
contador();

//*Llamada cada 1seg
setInterval(contador, 1000);