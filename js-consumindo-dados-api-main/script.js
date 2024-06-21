async function buscaEndereco(cep){
    try{
        var consultaCep = await fetch(`https:viacep.com.br/ws/${cep}/json/`)// requisição a api com o fetch
        var consultaCepConvertida = await consultaCep.json()// convertendo uma promisse para json
        if(consultaCepConvertida.erro){
            throw Error('Cep não existente!')
        }

        console.log(consultaCepConvertida)
        return consultaCepConvertida
    } 
    catch (erro){
        console.log(erro);
    }
}
let ceps = ['01001000', '01001001'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
Promise.all(conjuntoCeps).then(respostas => console.log(respostas)) // usamos para fazser varias requisições


 