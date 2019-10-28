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

* **row** - (padrão) da esquerda para direita `ltr` (padrão left to right) ou da direita para esquerda `rtl`(padrão right to left);
* **row-reverse** - da direita para esquerda `ltr` ou da esquerda para direita `rtl`;
* **column** - igual ao `row` porém de cima para baixo;
* **column-reverse** - igual ao `row-reverse` porém de baixo para cima.

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
  width: 400px;
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

### flex-wrap

Todos os _flex itens_ tentarão, por padrão, caber em uma linha. Você pode alterar isso e permitir que os itens sejam agrupados conforme necessário com a propriedade `flex-wrap`

![Propriedade flex-wrap.](/assets/img/flex-wrap.jpg "Propriedade flex-wrap.")

Abaixo, temos ver os valores possíveis para a propriedade _flex-wrap_:

```css
.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

* **nowrap** - (padrão) todos os _flex itens_ estarão em uma única linha;
* **wrap** - os _flex_itens_ são agrupados em várias linhas, de cima para baixo;
* **wrap-reverse** - os _flex itens_ são agrupados em várias linhas de vaixo para cima.

```html
<h3>nowrap</h3>
<ul class="container nowrap">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
  <li class="flex-item">7</li>
  <li class="flex-item">8</li>
</ul>

<h3>nowrap - com overflow</h3>
<ul class="container nowrap">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
  <li class="flex-item">7</li>
  <li class="flex-item">8</li>
  <li class="flex-item">9</li>
  <li class="flex-item">10</li>
</ul>

<h3>wrap</h3>
<ul class="container wrap">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
  <li class="flex-item">7</li>
  <li class="flex-item">8</li>
</ul>

<h3>wrap-reverse</h3>
<ul class="container wrap-reverse">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
  <li class="flex-item">7</li>
  <li class="flex-item">8</li>
</ul>

```

```css
h3 {  
  text-align: center;  
  color: #333;  
  font-family: verdana;  
  font-size: 18px;  
  font-weight: 300;
  width: 400px;
}

.container {
  max-width: 400px;
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid #ccc;
  display: flex;
}

.nowrap  {
  flex-wrap: nowrap;
}

.wrap    { 
  flex-wrap: wrap;
}  
.wrap li {
  background: gold;
}

.wrap-reverse { 
  flex-wrap: wrap-reverse;
}  
.wrap-reverse li {
  background: deepskyblue;
}

.flex-item {
  background: tomato;
  padding: 5px;
  width: 100px;
  height: 100px;
  margin: 10px;
  line-height: 100px;
  color: white;
  font-weight: bold;
  font-size: 2em;
  text-align: center;
}
```

https://codepen.io/alexandresl/pen/KKKvPwO

Como pode ser visto no exemplo, no caso do ```flex-wrap: nowrap;```, os _flex itens_ são redimensionados para poder caber no contêiner, mesmo que estes possuam largura fixada. Quando isso não é mais possível, os itens acabam por "vazarem" de dentro do container, como pode ser visto no segundo exemplo.
