function iniciarJogo() {
  const telaInicial = document.getElementById('tela-inicial');
  const telaHistoria = document.getElementById('tela-historia');

  // Transição suave com esmaecimento (fade-out)
  telaInicial.style.transition = 'opacity 0.5s ease';
  telaInicial.style.opacity = '0';

  setTimeout(() => {
    // Esconde a capa após a animação
    telaInicial.classList.add('escondido');
    
    // Mostra a tela do jogo com animação
    telaHistoria.classList.remove('escondido');
  }, 500);
}