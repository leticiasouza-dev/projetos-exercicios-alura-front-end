const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

focoBt.addEventListener('click', () =>{
    alterarContexto('foco', 'Otimize sua produtividade, mergulhe no que importa');
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto', 'Que tal dar uma respirada? Faça uma pausa curta!');
})

longoBt.addEventListener('click', () =>{
    alterarContexto('descanso-longo', 'Hora de voltar à superfície.Faça uma pausa longa.');
})

function alterarContexto(contexto, texto){
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src' , `/imagens/${contexto}.png`);
    titulo.innerHTML = texto;
}


