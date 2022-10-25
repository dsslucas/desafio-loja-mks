# Desafio Loja - MKS Sistemas

Desafio proposto pela MKS Sistemas, que consiste em montar uma aplicação front-end para compras online, com os itens sendo capturados do servidor back-end da companhia.

Site disponível neste [Link](https://desafio-loja-mks.vercel.app/).

## O que foi utilizado?
- React.js
- TypeScript
- Redux Tools
- Styled Components
- Axios
- Vercel (deploy)

## Instruções para instalação

É necessário ter instalado em seu computador o `node` de forma global. Disponível neste [link](https://nodejs.org/en/download/).

Após a instalação, acesse o terminal (prompt de comando, PowerShell ou outro de sua preferência) e digite

```
npm install -g npm
```

Uma vez instalado, clone este repositório para seu computador utilizando

```
git clone https://github.com/dsslucas/desafio-loja-mks.git
```

Com a fase de clonagem concluída, acesse a pasta do projeto em um terminal de sua preferência e baixe as dependências. É importante para o código ser executado.

```
npm i
```

Tendo baixado as dependências, você está apto a executar localmente o código. Digite:

```
npm start
```

Estando concluído, uma página web será aberta em ```http://localhost:3000```. Com isso, a instalação está concluída.


## Resultado final:

### Página principal

Desktop
![Desktop](assets/pages/main/desktop.png)

Mobile
![Mobile](assets/pages/main/mobile.png)

### Lista de itens

Desktop
![Desktop](assets/pages/list/desktop.png)

Mobile
![Mobile](assets/pages/list/mobile.png)

## Melhorias no código (que não foram especificadas)
- **Não existe a duplicata de compra**. O produto, uma vez clicado em "Comprar", a aplicação permite apenas o incremento e o decremento da quantidade (sendo o último limitado a 1 produto) e a exclusão do item;

![Duplicata](assets/gif/duplicata.gif)

- **Propriedades CSS sobre o cursor do mouse, indicando áreas clicáveis ou não**. Está habilitado no botão "Comprar", o de Quantidade (que não permite o item ter quantidade menor que 1) e no botão "Finalizar compra";

![Cursor inativo](assets/gif/cursor%20mouse.gif)

- **Foco na lista de compras quando clicado**, mantendo os componentes abaixo dela desfocados;

![Foco](assets/gif/foco.gif)

- Ao clicar em qualquer campo fora da lista de compras, ela é fechada;

![Clique fora da lista](assets/gif/clique%20fora%20do%20botao.gif)

- Ainda na lista, uma vez aberto, os botões de compra ficam desabilitados;
- O botão "Finalizar compra" fica válido **apenas** quando existe um valor total maior que zero. Sendo clicado, a aplicação volta com os dados iniciais.