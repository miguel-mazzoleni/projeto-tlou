/* 
Objetivo - clicar no botão e mostrar a correspondente
passo 1 - dar um jeito de pegar o elemento HTML dos botoes na tela

passo 2 - dar um jeito de indentificar o clique do usuario no botao

passo 3 - desmarcar o botao selecionado anterior

passo 4 - marcar o botão clicando como se estivesse selecionado

passo 5 - esconder imagem de fundo anterior

passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado

*/
     //passo 1 - dar um jeito de pegar o elemento HTML dos botoes na tela

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll ('.imagem')

       //passo 2 - dar um jeito de indentificar o clique do usuario no botao
botoesCarrossel.forEach ((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo 3 - desmarcar o botao selecionado anterior

        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        // passo 4 - marcar o botão clicando como se estivesse selecionado
        botao.classList.add('selecionado');

        //passo 5 - esconder imagem ativa de fundo anterior
        const imagemAtiva = document.querySelector ('.ativa');
        imagemAtiva.classList.remove('ativa');

        //passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        imagens[indice].classList.add('ativa');



    })
})