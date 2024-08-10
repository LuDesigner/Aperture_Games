let jogosAlugados = 0
let name = prompt('Qual é o seu nome?');

function contarEEXibirJogosAlugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    // alert(nomeJogo.textContent);

    if (imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Favoritar';
        alert(`${name} , você quer devolver o jogo ${nomeJogo.textContent} ?`);
        jogosAlugados--;

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Desfavoritar';
        alert(`${name} , você quer alugar o jogo ${nomeJogo.textContent} ?`);
        jogosAlugados++;
    }

    contarEEXibirJogosAlugados();

}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});