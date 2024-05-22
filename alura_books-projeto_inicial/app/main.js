let livros = [];
const endponintDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaApi() // função para pegar os 
const elementoParaInserirLivros = document.getElementById('livros');

async function getBuscarLivrosDaApi(){ // função usada para executar só quando receber valores
    const res = await fetch(endponintDaApi) // será a resposta da minha api
    livros = await res.json() // trasformar a resposta da api em json
    console.log(livros)
    exibirLivrosNatela(livros)
}

function exibirLivrosNatela(livros){
    livros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}
            Construa aplicações incríveis" />
        <h2 class="livro__titulo">
            ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
           
        
    });
}