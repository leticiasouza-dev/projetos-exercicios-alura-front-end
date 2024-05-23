function aplicarDesconto(livros){
    const desconto = 0.3;
    livrosComDescontos = livros.map(livro => {
        // realizando uma copia de livros, com essa copia acesse o preço e adicione o desconto
        return {...livro,   preco: livro.preco - (livro.preco * desconto)} 
    })

    return livrosComDescontos;
}