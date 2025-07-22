let correntMusic=document.querySelector('audio');

document.querySelector(".botao-play").addEventListener('click', playMusic);

function playMusic(){
    alert("evento acionado");
    correntMusic.play();
    document.querySelector('.botao-pause').style.display='block';
}