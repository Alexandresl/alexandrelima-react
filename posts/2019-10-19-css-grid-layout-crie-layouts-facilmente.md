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

O Flex Box foi projetado como um modelo de layout _unidimensional_. Oferece a possibilidade de distribuição de espaço entre itens em uma interface e capacidade de alinhamento. Assim, ao declararmos a propriedade 
```css display: flex; ``` 
deverá ser definida se ela irá alinhar os itens de forma horizontal ou vertical, como veremos em seguida.

Já o CSS Grid permite a criação de layout _bi-dimensional_, ou seja, permite que criemos layout com o uso de linhas e colunas, assim, ele é bastante utilizado para fazer essa organização mais macro do site.
