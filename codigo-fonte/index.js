//I mportando o Express para o projeto.
const Express = require("express");

// Inicializando o express no projeto nodejs.
const Aplicativo = new Express();

// Disponibilizo o meu recurso (Endpoint) via Http.
Aplicativo.get('/', ( RequisicaoCliente, RespostaServidor) => RespostaServidor.send('Hello World'));

// Configurando a porta de acesso aos recursos do Express via Http.
Aplicativo.listen(1234, () => console.log('Servidor Okay...'));


