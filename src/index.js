// Importa o módulo express, que é um framework para Node.js usado para criar aplicativos da web.
const express = require('express')

// Importa o módulo https, que é usado para criar servidores HTTPS.
const https = require('https')

// Importa o módulo path, que fornece utilitários para trabalhar com caminhos de arquivos e diretórios.
const path = require('path')

// Importa o módulo fs, que é utilizado para operações de sistema de arquivos, como leitura e gravação de arquivos.
const fs = require('fs')

// Cria uma instância do aplicativo express.
const app = express()

// Define uma rota GET para a página inicial ('/'). Quando essa rota é acessada, o servidor envia o arquivo index.html que está localizado na pasta 'views'.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Define as opções para o servidor HTTPS, especificando a chave privada e o certificado SSL.
const options = {
    key: fs.readFileSync(path.resolve(__dirname, '../cert', 'server.key')),
    cert: fs.readFileSync(path.resolve(__dirname, '../cert', 'server.cert'))
};

// Cria um servidor HTTPS utilizando as opções definidas anteriormente e passa o aplicativo express como manipulador de solicitação.
// O servidor escuta na porta 3333.
https.createServer(options, app).listen(3333, () => {
    console.log('Servidor HTTPS está sendo executado na porta 3333...');
})

// Comentários para links de vídeos no YouTube.
// https://www.youtube.com/watch?v=USrMdBF0zcg
// https://www.youtube.com/watch?v=cBa87N_BZ4s
