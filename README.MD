## Lista de Compras

Este é um projeto simples de "Lista de Compras" que permite adicionar e excluir itens, desenvolvido como parte do aprendizado de manipulação de DOM e interatividade com JavaScript. O projeto também inclui validações e animações para melhorar a experiência do usuário.

## Funcionalidades

- Adicionar itens à lista de compras.
- Verificar se o item já foi adicionado à lista (evitar duplicatas).
- Excluir itens da lista.
- Animações suaves ao adicionar e excluir itens.

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica da página.
- **CSS3**: Estilos visuais, incluindo animações e responsividade.
- **JavaScript**: Manipulação de DOM, validações e interatividade.

## Como Executar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/ChayRR12/lista-de-compras.git
   ```

2. Abra o arquivo `index.html` em qualquer navegador da web.

3. Você verá um campo de input onde poderá adicionar os itens de sua lista de compras. Após digitar o nome do item, clique no botão "Adicionar" para incluí-lo na lista. Você pode excluir qualquer item clicando no botão "Excluir" ao lado de cada um.

## Estrutura do Projeto

```bash
/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css   
│   │   ├── js/
│   │   │   └── script.js     
├── index.html                
└── README.md                 
```

## Funcionalidades Detalhadas

- **Adição de Itens**: O usuário pode digitar o nome de um item no campo de input e clicar no botão "Adicionar". O item será adicionado à lista.
  
- **Verificação de Itens Duplicados**: Antes de adicionar o item, o sistema verifica se o mesmo já existe na lista. Caso exista, um alerta é exibido e o campo de input recebe um contorno vermelho.

- **Excluir Itens**: Cada item da lista tem um botão "Excluir" que permite removê-lo da lista. A exclusão ocorre com uma animação de diminuição gradual.

- **Animações**: As animações aplicadas são sutis e proporcionam uma experiência mais suave. Ao adicionar um item, ele aparece com um efeito de "crescimento". Ao excluir, o item desaparece com um efeito de "encolhimento".
