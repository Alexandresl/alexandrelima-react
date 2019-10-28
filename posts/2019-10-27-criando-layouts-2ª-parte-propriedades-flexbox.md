---
title: Criando layouts - 2ª parte - Propriedades Flexbox
description: >-
  Vamos conhecer as propriedades que poderão ser utilizadas para a manipulação
  de um contêiner Flexbox.
date: '2019-10-27 09:05:46'
image: /assets/img/mononoke.jpg
category: CSS
background: '#2da0c3'
---
No post anterior vimos os fundamentos do _Flexbox_ e como criar um contêiner. Neste post vamos ver quais as propriedades _Flexbox_ disponíveis.

### flex-direction

O Flexbox, em oposição ao CSS Grid que veremos posteriormente, permite que criemos apenas layouts unidirecionais e a propriedade `flex-direction` será a responsável por definir a direção em que os _flex itens_ são colocados no contêiner flex, em outras palavras, ele define o _main axis_ do _flex container_.

Veja abaixo as opções do _flex-direction_

![Opções da propriedade flex-direction: row - row-reverse - column - column-reverse](/assets/img/flex-direction.jpg "Opções da propriedade flex-direction: row - row-reverse - column - column-reverse")

_\`\``css_

_.container {_

  _flex-direction: row | row-reverse | column | column-reverse;_

_}_

_\`\``_
