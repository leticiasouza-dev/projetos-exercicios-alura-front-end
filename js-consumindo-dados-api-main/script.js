var consultaCep = fetch('https:viacep.com.br/ws/01001000/json/')// requisição a api com o fetch
    .then(resposta => resposta.json())// usado para transformar a resposta em json (then = então)
    .then(r => {//usamos para mostrar a resposta da api (then = então)
        if(r.erro) { // se o erro existir ->
            throw Error('Esse cep não aexite!!');
        } else console.log(r)})  
     .catch(erro => console.log(erro)); // usamos para tratamento de erro (caso a requisição(promise) ocorra um erro será exibida)