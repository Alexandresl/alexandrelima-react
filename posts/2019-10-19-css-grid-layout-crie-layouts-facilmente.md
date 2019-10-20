---
title: Flex Box e CSS Grid Layout - Crie layouts facilmente
description: Cmo criar layouts utilizando o Flex Box e o CSS Grid Layout
date: '2019-10-19 11:08:10'
image: /assets/img/main.jpg
category: CSS
background: '#2da0c3'
---
### O que é o Flex Box e o CSS Grid?

O Flex Box e o CSS Grid são duas tecnologias nativas do CSS e apesar de serem relativamente recentes já têm suporte na maioria dos browsers. Conforme o [Can I use](https://caniuse.com/), [98.06%](https://caniuse.com/#feat=flexbox) dos navegadores já dão suporte ao Flex Box e [92.81%](https://caniuse.com/#search=css%20grid) ao CSS Grid.

Estas duas tecnologias se complementam, podendo ser utilizadas em conjunto no mesmo projeto.

### Qual a diferença entre o Flex Box e o CSS Grid?

O Flex Box foi projetado como um modelo de layout _unidimensional_. Oferece a possibilidade de distribuição de espaço entre itens em uma interface e capacidade de alinhamento. Assim, ao declararmos a propriedade `display: flex;`, deverá ser definida se ela irá alinhar os itens em linha ou coluna.

Já o CSS Grid permite a criação de layout _bi-dimensional_, ou seja, permite que criemos layout com o uso de linhas e colunas, assim, ele é bastante utilizado para fazer essa organização mais macro do site.

### Flex Box

Para entendermos o Flex Box devemos pensar em termos de eixos - o eixo principal, também chamado de _Main Axis_ e o eixo transversal, conhecido também como _Cross Axis_. Como mostra a Figura 1, nós temos um Flex Container, que será o elemento que irá receber a propriedade ```display: flex;```, e dentro dele diversos _flex-item_. Neste exemplo os itens estão alinhados na horizontal, assim o Main Axis, ou eixo principal está na horizontal e o eixo transversal encontra-se na vertical.

Figura 1
![Figura 1 - Ilustração identificando o Main Axis e o Cross Axis](/assets/img/grupo-3.jpg "Figura 1 - Ilustração identificando o Main Axis e o Cross Axis")



