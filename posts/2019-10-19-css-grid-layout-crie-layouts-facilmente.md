---
title: Criando layouts - 1ª parte - Flexbox
description: >-
  Nesta série de posts, vou mostrar como poderemos criar layouts de forma
  simples utilizando o Flex Box e o CSS Grid.
date: '2019-10-19 11:08:10'
image: /assets/img/main.jpg
category: CSS
background: '#2da0c3'
---
### Flexbox

O _flexbox_ Layout vem para resolver de forma mais eficiente a forma como organizamos, alinhamos e distribuímos os espaços entre os itens de um contêiner. Uma das vantagens que o Flexbox nos proporciona é a de conseguimos fazer isso mesmo quando o tamanho dos itens é desconhecido ou dinâmico.

A principal ideia por trás do _Flexbox_ é dar ao contêiner a capacidade de alterar a largura, altura e até a ordem de seus itens para melhor preencher o espaço disponível. Isso facilita muito a criação de elementos de layout que conseguem se acomodar em todos os tipos de dispositivos de exibição e tamanhos de tela. Um contêiner _Flexbox_ poderá expandir itens para preencher espaços livres disponíveis ou os reduzir para evitar o indesejável _overflow_

Além disso, o _Flexbox_ é independente da direção, podendo seu utilizado para organizar tanto itens na vertical quanto na horizontal. 

Embora o _Flexbox_ tenha esta flexibilidade (sem trocadilhos), veremos que sua utilização é mais apropriada para componentes de um aplicativo e layout de pequena escala, enquanto que o CSS grid (que também irei falar posteriormente) fornecerá suporte maior para a criação de layouts mais complexos.

### Fundamentos

O _Flexbox_ é um módulo inteiro, não apenas uma propriedade, assim envolve diversas coisas, incluindo um conjunto de propriedades. Alguns deles devem ser definidos no contêiner (elemento pai, conhecido com _Flex Container_), enquanto outros devem ser definidos nos filhos (chamados de _Flex Item_).



Figura 1
![Imagem mostrando Main Axis e o Cross Axis](/assets/img/grupo-3.jpg "Flex Box - Main Axis e Cross Axis")
