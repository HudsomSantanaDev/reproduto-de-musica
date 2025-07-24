let correntMusic = document.querySelector('audio');
let musicDuration = document.querySelector(".end");

document.querySelector(".botao-play").addEventListener("click", iniciarMusica);

document.querySelector(".botao-pause").addEventListener("click", pausarMusica);

correntMusic.addEventListener('timeupdate', atualizarBarra);

//proximo passo Selecionar imagem
musicDuration.textContent = secondToMinutes(Math.floor(correntMusic.duration));



function iniciarMusica() {
    correntMusic.play();
    //inversão dos botoes
    document.querySelector(".botao-pause").style.display = "block";
    document.querySelector(".botao-play").style.display = "none";


}

function pausarMusica() {
    correntMusic.pause();
    //inversão dos botoes
    document.querySelector(".botao-pause").style.display = "none";
    document.querySelector(".botao-play").style.display = "block";
}

function atualizarBarra() {
    let barra = document.querySelector('progress');

    //calculo para saber a porcentagem do estados da musica
    //Math.floor arredonda
    barra.style.width = Math.floor((correntMusic.currentTime / correntMusic.duration) * 100) + '%';

    let elapsedTime = document.querySelector('.start');
    elapsedTime.textContent = secondToMinutes(Math.floor(correntMusic.currentTime));
}

function secondToMinutes(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;


    }
    return campoMinutos + ':' + campoSegundos;

}


