# Avaliação #05 Complete a API do WebService e Generalize

Classroom: <https://classroom.github.com/a/4qyg4W_Z>

Considere o código necessário para permitir a obtenção de todos os (`GET /usuarios`), de um usuário (`GET /usuario?id=1`), a adição (`POST /usuarios`) e exclusão (`DELETE /usuario?id=1`), codificado em [main.ts](webservice/src/main.ts).

## Nível 1

Implemente as mesmas operações para _produto_, com no mínimo dois atributos (ex.: _descricao_ e _preco_). Isto pode ser feito no [main.ts](webservice/src/main.ts).

## Nível 2

Identificar e eliminar a lógica duplicada com abstrações. Adicionar constantes para substituir valores literais (ex.: a porta `9999`).

## Desafio

Generalizar os comportamento e separar tudo em classes conectáveis através de suas interfaces.
