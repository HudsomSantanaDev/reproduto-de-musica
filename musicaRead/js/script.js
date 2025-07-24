let correntMusic = document.querySelector('button');

// funciona
//os icones que nao estao reagindo ao click
//solucao:trocar os icones externos para icones internos armazenados no computador!!!!!
document.querySelector(".botao-play").addEventListener('click', playMusic);

/*document.querySelector('.botao-play').addEventListener("click",iniciarMusica);
function iniciarMusica(){
    correntMusic.play();
}*/

function playMusic() {
    console.log("oi");
    correntMusic.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display="none";
}
