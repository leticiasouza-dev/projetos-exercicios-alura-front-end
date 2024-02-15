function exibirTextoNaTela(tag, texto){ // função que exibi tento na tela na tag desejada e o texto desejado;
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

exibirTextoNaTela("h1","Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");


let numeroAleatorio = geraNumeroAleatorio();

function verificarChute(){ // função para verificar o chute
    console.log('foii');
}

function geraNumeroAleatorio(){ // função que gera um valor aleatório entre 1 e 10;
    let numeroAleatorio = Math.round(Math.random() * 10 + 1);

    return numeroAleatorio;
}

console.log(geraNumeroAleatorio());