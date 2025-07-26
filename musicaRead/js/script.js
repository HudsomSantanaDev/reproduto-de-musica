let correntMusic = document.querySelector('audio');
let musicDuration = document.querySelector(".end");
let image=document.querySelector('img');
let musicName=document.querySelector('.description h2');
let artist=document.querySelector('.description i');
let indexMusic=0;
let musics=[
    {
        titulo:'Brave',artist:'Karan, Scott Guberman, Angeline Saris, Jeremy Hoenig',src:'music/Brave - Mark Karan, Scott Guberman, Angeline Saris, Jeremy Hoenig.mp3',img:'img/ahmed-saeed-3oY6iqvc2sg-unsplash.jpg'
        },
    {
        titulo:'Cash',artist:'Mark Karan, Scott Guberman, Angeline Saris, Jeremy Hoenig',src:'music/Cash - Mark Karan, Scott Guberman, Angeline Saris, Jeremy Hoenig (1).mp3',
        img:'img/jesper-stechmann-nb2l7FmbSdA-unsplash.jpg',
        }
        ,
    {
        titulo:'Clocks',artist:'Mark Karan, Scott Guberman, Angeline Saris, Jeremy Hoenig',src:'music/Clocks - Mark Karan, Scott Guberman, Angeline Saris, Jeremy Hoenig.mp3',
        img:'img/bruce-christianson-86AN3JFiBsY-unsplash.jpg',
        }
          ,
    {
        titulo:'Hanging Motionless',artist:'Mark Karan, Scott Guberman, Angeline Saris, Jeremy Hoenig',src:'music/Hanging Motionless - Mark Karan, Scott Guberman, Angeline Saris, Jeremy Hoenig.mp3',
        img:'img/jubeo-hernandez-ZmWLGkPe1Sg-unsplash.jpg',
        }
         ,
    {
        titulo:'Numb Sky',artist:'Mark Karan, Scott Guberman, Angeline Saris, Jeremy Hoenig',src:'music/Numb Sky - Mark Karan, Scott Guberman, Angeline Saris, Jeremy Hoenig.mp3',
        img:'img/hannah-morgan-dnkM5wPjVdg-unsplash.jpg',
        }
         ,
    {
        titulo:'Numb Sky',artist:'Mark Karan, Scott Guberman, Angeline Saris, Jeremy Hoenig',src:'music/Numb Sky - Mark Karan, Scott Guberman, Angeline Saris, Jeremy Hoenig.mp3',
        img:'img/lee-jeffs-60wCqYf7Fg8-unsplash.jpg',
        }
];

renderizarMusica(indexMusic);


document.querySelector(".botao-play").addEventListener("click", iniciarMusica);

document.querySelector(".botao-pause").addEventListener("click", pausarMusica);

correntMusic.addEventListener('timeupdate', atualizarBarra);


musicDuration.textContent = secondToMinutes(Math.floor(correntMusic.duration));

document.getElementById('anterior').addEventListener("click",()=>{
    indexMusic--;
    if(indexMusic<0){
        indexMusic=2;
    }
renderizarMusica(indexMusic);

});
document.getElementById("proximo").addEventListener("click",()=>{
    indexMusic++;
     if(indexMusic>2
     ){
        indexMusic=0;
    }
renderizarMusica(indexMusic);
});

function renderizarMusica(index){
    
correntMusic.setAttribute('src',musics[index].src);
correntMusic.addEventListener('loadeddata',()=>{
    musicName.textContent=musics[index].titulo;
    artist.textContent=musics[index].artist;
    image.src=musics[index].img;
    parseInt( musicDuration.textContent = secondToMinutes(Math.floor(correntMusic.duration)));
    iniciarMusica(indexMusic);
});
}



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


