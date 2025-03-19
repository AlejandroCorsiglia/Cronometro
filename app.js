
const cronometro = document.getElementById('cronometro');
const btnInicioPausa = document.getElementById('btn-inicio-pausa');
const btnReiniciar = document.getElementById('btn-reiniciar');

let [hora, minutos, segundos] = [0, 0, 0];

let intervaloDeTiempo;

let estadoCronometro = 'pausado';

function actualizarCronometro(){
    segundos++;
    if(segundos === 60){
        segundos = 0;
        minutos++;
        
        if(minutos === 60){
            minutos = 0;
            hora++;
        }
    }

    const segundosConFormato = asignarFormato(segundos);
    const minutosConFormato = asignarFormato(minutos);
    const horasConFormato = asignarFormato(hora);

    cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

function asignarFormato(unidadDeTiempo){
    return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
}

btnInicioPausa.addEventListener('click', function(){
    if(estadoCronometro === 'pausado'){
        intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
        btnInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
        btnInicioPausa.classList.remove('iniciar');
        btnInicioPausa.classList.add('pausar');
        estadoCronometro = 'andando';
    } else{
        window.clearInterval(intervaloDeTiempo);
        btnInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
        btnInicioPausa.classList.remove('pausar');
        btnInicioPausa.classList.add('iniciar');
        estadoCronometro = 'pausado';
    }
});


btnReiniciar.addEventListener('click', function(){
    window.clearInterval(intervaloDeTiempo)
    segundos =0;
    hora=0;
    minutos=0;

    cronometro.innerText = '00:00:00';
    btnInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    btnInicioPausa.classList.remove('pausar');
    btnInicioPausa.classList.add('iniciar');
    estadoCronometro = 'pausado';
    
})