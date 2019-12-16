---
title: 'Curso JavaScript - Aula #2 - Configuração do ambiente'
description: O que precisamos instalar para poder executar nossos programas JavaScript?
date: '2019-12-15 06:07:00'
image: /assets/img/jsimage.jpg
category: JS
background: '#d6ba32'
---
O JavaScript é uma linguagem interpretada e para executarmos um programa JavaScript não precisamos mais do que um navegador web. Porém, instalar alguns outros programas, pode facilitar e melhorar nosso rendimento, tanto para seus estudos quanto para desenvolver seus próprios projetos.

Não entrarei aqui na particularidade da instalação para cada sistema operacional, porém todos os softwares que irei indicar estão disponíveis para Mac, Windows e Linux.

## NodeJS

O primeiro programa é o NodeJS. Ele poderá ser baixado por este [link](https://nodejs.org/en/). 

Ao acessar a página você verá em destaque duas versões: A LTS (long term support) e current. Na data em que escrevo a LTS é a 12.13.1 e a Current é a 13.3.0. Indico para instalação a versão LTS (independente da versão que estiver disponível na data que você estiver acessando), por ser a versão mais estável.

Ao realizar a instalação, além do NodeJS, você estará instalando o NPM (Node Package Manager) que é o gerenciador de pacotes do Node (posteriormente vamos entender sua função) e também estará adicionando o Node no Path do sistema.

Com a adição do NodeJS no Path do sistema, nós conseguiremos executar o JavaScript fora do nosso navegador, seja do terminal do sistema operacional, quanto de editores de texto, quando estes possuírem este recurso.

Após instalar, para verificar se tudo ocorreu como o esperado. Abra o terminal do seu sistema operacional e digite os comandos:

```
node --version
```

para verificar a versão do NodeJS instalado. Neste momento estou com o 12.13.1.

```
npm --version
```

que este momento está na versão 6.12.1.






