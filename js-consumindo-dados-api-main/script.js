var consultaCep = fetch('https:viacep.com.br/ws/01001000/json/')
.then(resposta => resposta.json())// usado para transformar a resposta em json
.then(r => console.log(r)) //usamos para mostrar a resposta da api
