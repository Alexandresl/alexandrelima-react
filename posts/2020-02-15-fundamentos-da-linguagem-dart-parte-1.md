---
title: Fundamentos da Linguagem Dart - Parte 1
description: Série de posts mostrando os fundamentos da linguagem Dart.
date: '2020-02-15 20:06:02'
image: /assets/img/dart.png
category: Dart
background: '#00c4b3'
---
Dart é uma linguagem fortemente tipada baseada em C. Então, se você já está acostumado com linguagens como Java, JavaScript e C#, perceberá uma grande familiaridade com estas linguagens.

Vamos ver no Exemplo 1, um trecho de código e comentar sobre algumas das características básicas desta linguagem:

**Exemplo 1**
```dart
// Esta é uma função especial
main () {
  print('Olá Dart!!!');
}
```

* O trecho ``` // Esta é uma função especial ``` representa um comentário de uma única linha. O Dart suporta também outros tipos de comentários que será abordado em outro momento.
* O ``` main () { ... } ``` é uma função especial. A execução da aplicação será iniciada por esta função.
* O ``` print() ``` é uma das formas de imprimir algo em tela.
* Em 'Olá Dart!!!' temos a declaração de uma string literal. O Dart permite tanto a utilização de aspas simples ('') como no exemplo, como aspas duplas ("").
