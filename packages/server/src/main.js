
import express from 'express';
import cors from 'cors';


const server = express();
    

//escrevendo os end points da API feita com express:
server.get('/status', (_, response) => {
    response.send({
        status: 'Okay',
    });
});

const enableCors = cors({ origin: 'http://localhost:3000' });

server
.options('/authenticate', enableCors)
.post(
'/authenticate', 
enableCors, 
express.json(), 
(request, response) => {
    console.log('E-mail', request.body.email, 'Senha', request.body.password);
    response.send({
        Okay: true, 
    });
});


//configurar a porta e o host name. Para o caso de mais de uma aplicação rodando. Podendo usar uma porta diferente para fazer configurações, ao invés de abrir o código fonte. Para isso, faz-se variáveis de ambiente.
//process: variável global do node. É um objeto e seus conteúdos são relacionados ao processo que está sendo executado. 
//env: é um objeto com as variáveis de ambiente.

//verifica se esxiste o env. Se sim, converte para um parseInt. Se não existe, manda a porta default.
const PORT = /*process.env.PORT ? parseInt(process.env.PORT) :*/ 8000;

//verifica se existe o host name (se for null, undefined ou O ele manda o outro lado).
const HOSTNAME = /* process.env.HOSTNAME || */"127.0.0.1";


//para criar um servidor, preciso colocar ele para ouvir e tratar as requisições

//listen: recepe os argumentos: porta, host name (IP local neste caso) e uma função que é executada assim que o server começa a rodar.
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is listening at: http://${HOSTNAME}:${PORT}`)
});

