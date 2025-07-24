let correntMusic = document.querySelector('audio');
  
// funciona
//os icones que nao estao reagindo ao click
//solucao:trocar os icones externos para icones internos armazenados no computador!!!!!
/**/
document.querySelector(".botao-play").addEventListener("click",iniciarMusica);

function iniciarMusica(){
    correntMusic.play();
}

