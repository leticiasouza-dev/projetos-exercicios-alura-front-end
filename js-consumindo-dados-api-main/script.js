async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';
    try{
        var consultaCep = await fetch(`https:viacep.com.br/ws/${cep}/json/`)// requisição a api com o fetch
        var consultaCepConvertida = await consultaCep.json()// convertendo uma promisse para json
        if(consultaCepConvertida.erro){
            throw Error('Cep não existente!')
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')

        cidade.value = consultaCepConvertida.localidade; //adicionando o valor da api no campo apos o focusot
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;

        console.log(consultaCepConvertida)
        return consultaCepConvertida
    } 
    catch (erro){
        mensagemErro.innerHTML = `<p>CEo inválido. Tente novamente!</p>`
        console.log(erro);
    }
}
// let ceps = ['01001000', '01001001'];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas)) // usamos para fazser varias requisições

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value))



 