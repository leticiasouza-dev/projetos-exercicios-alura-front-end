alert("Bem vindo(a) ao Jogo secreto")
let numeroEscolhido;
let numeroSorteado = Math.round(Math.random() * 100 + 1);
console.log(numeroSorteado);

let tentativas = 0;

let mensagem;

function valorMenorEMenor(n1, n2, numeroEscolhido){

    if(n1 > n2){ // se o numero escolhido for maior que o numero sorteado
        mensagem = `O numero sorteado é menor que ${numeroEscolhido}`
    } else{
        mensagem =  `O numero sorteado e maior que ${numeroEscolhido}`;
    }
}

while(numeroEscolhido != numeroSorteado){
    let numeroEscolhido = prompt("Digite um valor entre 0 a 100");
    tentativas++;
    console.log("tentativas " + tentativas)
    valorMenorEMenor(numeroEscolhido, numeroSorteado, numeroEscolhido);

    if(numeroEscolhido == numeroSorteado){
        alert(`Parabéns Você Acertou com ${tentativas} tentativas`);
        break
    } else{
        alert(`Errou \nDica: ${mensagem}`);
    }

}






    

