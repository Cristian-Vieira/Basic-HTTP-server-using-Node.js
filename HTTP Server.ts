//HTTP server using Node.js
import * as fs from 'fs'; // Importa o módulo fs para operações de sistema de arquivos
import * as http from 'http'; // Importa o módulo http para criar um servidor HTTP
import * as path from 'path'; // Importa o módulo path para manipulação de caminhos de arquivos

const PORT: number = 8000; // Define a porta em que o servidor irá escutar
const NomeDoDiretorio: string = './public'; // Define o nome do diretório onde os arquivos estão localizados

const types: Record<string, string> = {
  // Mapeia as extensões dos arquivos para os respectivos tipos
  html: 'text/html',
  css: 'text/css',
  js: 'application/javascript',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  gif: 'image/gif',
  json: 'application/json',
  xml: 'application/xml',
};

const root: string = path.normalize(path.resolve(NomeDoDiretorio)); // Obtém o caminho para o diretório raiz

const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  console.log(`${req.method} ${req.url}`); // Exibe no console o método e a URL da requisição

  const extension: string = path.extname(req.url!).slice(1); // Obtém a extensão do arquivo da requisição
  const type: string = extension ? types[extension] : types.html; // Determina o tipo do arquivo requisitado

  if (!type) {
    // Se o tipo MIME não for definido, envia um erro informando que o arquivo não foi encontrado
    sendErrorResponse(res, 404, 'text/plain', '404 File not found');
    return;
  }

  let fileName: string = req.url!; // Obtém o nome do arquivo da requisição
  if (fileName === '/') {
    fileName = 'index.html';
  } else if (!extension) {
    // Se a URL não tiver uma extensão de arquivo reconhecida
    const htmlFilePath = path.join(root, req.url! + '.html'); // Verifica se existe um arquivo HTML com o mesmo nome
    if (isFileAccessible(htmlFilePath)) {
      fileName = req.url! + '.html'; // Se existir, define o nome do arquivo como a URL com a extensão ".html"
    } else {
      fileName = path.join(req.url!, 'index.html'); // Caso contrário, assume que é um diretório e anexa "index.html" ao caminho
    }
  }

  const filePath: string = path.join(root, fileName); // Obtém o caminho para o arquivo

  if (!isPathUnderRoot(filePath)) {
    // Verifica se o caminho do arquivo está dentro do diretório
    sendErrorResponse(res, 404, 'text/plain', '404 File not found');
    return;
  }

  const readStream = fs.createReadStream(filePath); // Cria um fluxo de leitura do arquivo

  readStream.on('error', (err: any) => {
    // Se ocorrer um erro ao ler o arquivo, envia uma resposta de erro informando o erro interno do servidor
    sendErrorResponse(res, 500, 'text/plain', '500 Internal Server Error');
  });

  res.writeHead(200, { 'Content-Type': type }); // Define o cabeçalho da resposta com o tipo MIME adequado

  readStream.pipe(res); // Encadeia o fluxo de leitura do arquivo ao fluxo de resposta

});

function sendErrorResponse(
  res: http.ServerResponse,
  statusCode: number,
  contentType: string,
  message: string
) {
  // Função auxiliar para enviar uma resposta de erro com o código de status, tipo MIME e mensagem
  res.writeHead(statusCode, { 'Content-Type': contentType });
  res.end(message);
}

function isFileAccessible(filePath: string): boolean {
  // Função auxiliar para verificar se o arquivo é acessível
  try {
    fs.accessSync(filePath, fs.constants.F_OK);
    return true; // Retorna true se o arquivo existir
  } catch (e) {
    return false; // Retorna false caso contrário
  }
}

function isPathUnderRoot(filePath: string): boolean {
  // Função auxiliar para verificar se o caminho do arquivo está dentro do diretório 
  const normalizedFilePath: string = path.normalize(path.resolve(filePath));
  return normalizedFilePath.startsWith(root); // Retorna true se o caminho começa com o diretório raiz normalizado
}

server.listen(PORT, () => {
  // Inicia o servidor e exibe uma mensagem de sucesso no console
  console.log(`Server is listening on port ${PORT}`);
}).on('error', (err: { message: any; }) => {
  // Se ocorrer um erro ao iniciar o servidor, exibe uma mensagem de erro no console
  console.error(`Error starting server on port ${PORT}: ${err.message}`);
});
