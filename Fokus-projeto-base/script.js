const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const imagemIcone = document.querySelector('.app__card-primary-butto-icon')

const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3') // instancia de audio

const startPauseBt = document.querySelector('#start-pause')
const iniciarOuPausarBt = document.querySelector('#start-pause span')

const audioPlay = new Audio('/sons/play.wav');
const audioPausa = new Audio('/sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3')
const tempoNaTela = document.querySelector('#timer')

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

musica.loop = true;
musicaFocoInput.addEventListener('change', () =>{
    if(musica.paused){
        musica.play();
    } else{
        musica.pause();
    }
})

focoBt.addEventListener('click', () =>{
    tempoDecorridoEmSegundos = 1500;
    alterarContexto('foco');
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () =>{
    tempoDecorridoEmSegundos = 900;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active')
})

function alterarContexto(contexto){
    mostrarTempo()
    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src' , `/imagens/${contexto}.png`);

    switch (contexto){
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade, <br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;

        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada? 
            <strong class="app__title-strong">Faça uma pausa curta</strong>!`;
            break

        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície.
            <strong class="app__title-strong">Faça uma pausa longa</strong>!`;
    }
}


const contagemRegressiva = () =>{
    if(tempoDecorridoEmSegundos <= 0){
        audioTempoFinalizado.play()
        alert("Tempo Finalizado");
        zerar();
        return; // usado para parar a execução
    }

    tempoDecorridoEmSegundos -= 1
    console.log("temporizador:", tempoDecorridoEmSegundos);
    console.log('Tempo: ' + tempoDecorridoEmSegundos);
    console.log('Id: ' + intervaloId);

    mostrarTempo()
}

startPauseBt.addEventListener('click', () =>{
    iniciarOuPausar()

    
})

function iniciarOuPausar(){
    if(intervaloId){
        audioPausa.play();
        zerar();
        return;
    }
    intervaloId = setInterval(contagemRegressiva, 1000);
    iniciarOuPausarBt.textContent = 'Pausar';
    
    imagemIcone.setAttribute('src', './imagens/pause.png')
}

function zerar(){
    clearInterval(intervaloId);
    iniciarOuPausarBt.textContent = 'Começar';
    intervaloId = null;
    imagemIcone.setAttribute('src', './imagens/play_arrow.png')
}

function mostrarTempo(){
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatada = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})  // formatação hora, e ele vai decrementar em segundos
    tempoNaTela.innerHTML = `${tempoFormatada}`
}

mostrarTempo()
