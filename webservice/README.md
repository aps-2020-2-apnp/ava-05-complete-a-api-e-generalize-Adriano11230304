# Template

Um _template_ é um modelo para novos projetos, para não iniciar do zero e ter pelo menos uma estrutura onde se apoiar.

Antes de começar a desenvolver com este _template_ é necessário ter instalado o [Node.js](https://nodejs.org/en/download/), [Git](https://git-scm.com/download/win)  e o [Visual Studio Code](https://code.visualstudio.com/).

Usando o Linux, é necessário baixar os pacotes `.deb` nos sites (clicar nos _links_ acima) e prosseguir a instalação. O Git pode ser instalado com o comando `sudo apt-get install git`.

## Configurações do Visual Studio Code

As configurações que uso no Visual Studio Code estão no arquivo `./.vscode/settings.json`, sintam-se a vontade para usá-las total ou parcialmente no seu vscode. Eu recomendo pelo menos o `wrap` e as _exclusions_ que melhoram a performance nos projetos Node.js.

## Node.js

A partir da linha de comando, execute `npm install`, isso vai gerar o diretório `node_modules`, que **nunca deve ser copiado para pendrives ou transferido por e-mail**, já que só depende do arquivo `package.json` para gerar novamente com o comando citado.

## Rodando

Para _rodar_ o projeto execute o comando `npm start`.
