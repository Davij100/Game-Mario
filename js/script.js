const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')


/*Fazendo a animação de pulo do mario, e configurando a retirada do atributo jump para que seja possível pular mais de uma vez*/
const jump = () => {
    mario.classList.add('jump');

setTimeout(() => {
    mario.classList.remove('jump');
    }, 500);
}

/*verificação da posição do mario, para saber se ele bateu no cano ou não.*/
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;

    /*Apagando a palavra px da string para que seja possível realizar uma manipulação dos dados*/
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    /*Vericando a altura do personagem, se for menor de 80px ele encostou*/
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        /*trocando a imagem do mario quando ocorre o game over*/
        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

    }

    }, 10);

document.addEventListener('keydown', jump);