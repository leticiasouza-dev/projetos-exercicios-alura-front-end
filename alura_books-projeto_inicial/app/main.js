let livros = [];
const endponintDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaApi() // função para pegar os 


async function getBuscarLivrosDaApi(){ // função usada para executar só quando receber valores
    const res = await fetch(endponintDaApi) // será a resposta da minha api
    livros = await res.json() // trasformar a resposta da api em json
   
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivrosNatela(livrosComDesconto)
}

