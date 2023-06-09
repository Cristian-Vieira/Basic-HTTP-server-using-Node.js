# Basic HTTP server using Node.js
 This is a simple HTTP server in TypeScript using Node.js. It allows the creation of a server that can serve static files (such as HTML, CSS, JavaScript, images, etc.) from a specified directory.

## Features
 - Supports multiple file types including HTML, CSS, JavaScript, images (PNG, JPG, JPEG, GIF), JSON and XML
 - Logs requests to the console
 - Submit appropriate `Content-Type` header based on file extension
 - Send error responses for file not found and internal server errors

## Requirements
 1. **Node.js**: You can download it from the [official Node.js website](https://nodejs.org/).
 2. **TypeScript**: You will need to install the TypeScript compiler. You can install it using npm (Node.js package manager) by running the following command in your terminal:

      ```npm install -g typescript```

 3. **NPM Packages** This code uses the following packages: `fs`, `http` and `path`
 4. This Script may not work on older environments make sure you have the latest version of node.js installed on your machine

#### After installing Node.js and TypeScript, you must compile the TypeScript code to JavaScript by running `tsc` in the directory containing the TypeScript file. After this step, the server can be started.

## Notes
 - Once the server is started, it will start listening on port 8000. You can access it by opening `http://localhost:8000` in your browser.
 - Make sure the **public** directory exists and contains the files you want to serve.
 - The server will use the file extensions to determine the correct MIME type. Make sure your file extensions are correctly mapped to the types object in the source code.
 - This is a basic HTTP server example and can be extended and customized as needed to meet your project requirements.

## License
 This code is released under the MIT license.

---

### Descrição em PT-BR

# HTTP server using Node.js
 Este é um Servidor HTTP simples em TypeScript usando Node.js. Ele permite a criação de um servidor que pode servir arquivos estáticos (como HTML, CSS, JavaScript, imagens, JSON and XML)

## Features
 - Suporta vários tipos de arquivo, incluindo HTML, CSS, JavaScript, imagens (PNG, JPG, JPEG, GIF), JSON e XML
 - Registra solicitações no console
 - Envia o header `Content-Type` apropriado com base na extensão do arquivo
 - Envia respostas de erro para arquivo não encontrado e erros internos do servidor

## Requisitos
 1. **Node.js**: Você pode baixá-lo no [site oficial Node.js](https://nodejs.org/).
 2. **TypeScript**: Você precisará instalar o compilador TypeScript. Você pode instalá-lo usando o npm (gerenciador de pacotes Node.js) executando o seguinte commando em seu terminal:

 ```npm install -g typescript```

 3. **Pacotes NPM** este codigo utiliza os seguintes pacotes:`fs`, `http`, and `path`
 4. Este script pode não funcionar em ambientes mais antigos, certifique-se de ter a versão mais recente do node.js instalada em sua máquina

#### Depois de instalar Node.js e TypeScript, você deve compilar o código TypeScript para JavaScript executando `tsc` no diretório que contém o arquivo TypeScript. Após esta etapa, o servidor pode ser iniciado.

## Notas
 - Apos o servidor ser iniciado começará a escutar na porta 8000. Você pode acessá-lo abrindo `http://localhost:8000` em seu navegador.
 - Certifique-se de que o diretório **public** exista e contenha os arquivos que você deseja servir.
 - O servidor utilizará as extensões dos arquivos para determinar o tipo MIME correto. Certifique-se de que as extensões dos seus arquivos estejam mapeadas corretamente no objeto types no código-fonte.
 - Este é um exemplo básico de servidor HTTP e pode ser estendido e personalizado conforme necessário para atender aos requisitos do seu projeto.

## Licença
 Este código é liberado sob a licença MIT.


