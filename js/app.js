let jogosAlugados = 0;
const name = prompt('Qual é o seu nome?') || 'Jogador';

function atualizarUserInfo() {
    const userInfoDiv = document.querySelector('.user-info');
    userInfoDiv.textContent = `${name}, você tem ${jogosAlugados} jogo${jogosAlugados !== 1 ? 's' : ''} favoritado${jogosAlugados !== 1 ? 's' : ''}.`;
}

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
    atualizarUserInfo();
}

function alterarStatus(id) {
    const gameClicado = document.getElementById(`game-${id}`);
    const imagem = gameClicado.querySelector('.dashboard__item__img');
    const botao = gameClicado.querySelector('.dashboard__item__button');
    const nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Desfavoritar
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Favoritar';
        botao.setAttribute('aria-pressed', 'false');
        alert(`${name}, você quer devolver o jogo ${nomeJogo.textContent}?`);
        jogosAlugados--;
    } else {
        // Favoritar
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Desfavoritar';
        botao.setAttribute('aria-pressed', 'true');
        alert(`${name}, você quer alugar o jogo ${nomeJogo.textContent}?`);
        jogosAlugados++;
    }

    contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function () {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});
