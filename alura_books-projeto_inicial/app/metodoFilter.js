const btnFiltrarLivros = document.querySelectorAll('.btn');

btnFiltrarLivros.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros(){
    const elementoBtm = document.getElementById(this.id) // aplicar diretamento no botão que eu clicando
    const categoria = elementoBtm.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirLivrosNatela(livrosFiltrados)
    
}

