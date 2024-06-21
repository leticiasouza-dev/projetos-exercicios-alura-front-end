async function buscaEndereco(){
    try{
        var consultaCep = await fetch('https:viacep.com.br/ws/01001000/json/')// requisição a api com o fetch
        var consultaCepConvertida = await consultaCep.json()// convertendo uma promisse para json
        console.log(consultaCepConvertida)
    } 
    catch (erro){
        console.log(erro);
    }
}

buscaEndereco();


 