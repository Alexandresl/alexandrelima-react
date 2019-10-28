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

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

* **row** - (padrão) da esquerda para direita ```ltr``` (padrão left to right) ou da direita para esquerda ```rtl```(padrão right to left);
* **row-reverse** - da direita para esquerda ```ltr``` ou da esquerda para direita ```rtl```;
* **column** - igual ao ```row``` porém de cima para baixo;
* **column-reverse** - igual ao ```row-reverse``` porém de baixo para cima.


Exemplo:

```html
<h3>flex-direction - row</h3>
<section class="container row">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</section>

<h3>flex-direction - row-reverse</h3>
<section class="container row-reverse">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</section>

<h3>flex-direction - column</h3>
<section class="container column">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</section>

<h3>flex-direction - column-reverse</h3>
<section class="container column-reverse">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</section>
```

```css
h3 {
  text-align: center;
  color: #333;
  font-family: verdana;
  font-size: 18px;
  font-weight: 300;
}
.container {
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ccc;
  display: flex;
}

.row {
  flex-direction: row;
}

.row-reverse {
  flex-direction: row-reverse;
}

.column {
  flex-direction: column;
  max-width: 55px
}

.column-reverse {
  flex-direction: column-reverse;
  max-width: 55px;
}

.item {
  border: 1px solid #ccc;
  padding: 20px;
}
```

https://codepen.io/alexandresl/pen/qBBjGGK

### 
