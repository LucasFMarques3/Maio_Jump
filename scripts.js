const mario = document.querySelector('.mario');
const ceu = document.querySelector('.ceu');
const cano = document.querySelector('.cano');
const botaoIniciar = document.querySelector('.botaoIniciar');
const restartButton = document.querySelector("#restart");

restartButton.addEventListener("click", function() {
  location.reload();
});


let perdeu = false;

const pulo = () =>{
  mario.classList.add('pulo')

  setTimeout(() => {
    mario.classList.remove('pulo')
  }, 500);
}
document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowUp") {
      pulo()
  }
});
console.log


//funçao que inicia o jogo
function iniciar(){
  //looping para fazer o jogo rodar
  const loop = setInterval(() =>{
    
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '');
    const posicaoCeu = +window.getComputedStyle(ceu).left.replace('px', '');
    const posicaoCano = cano.offsetLeft;

     //Analisa se o mário perdeu
     if(posicaoCano <= 83 && posicaoCano > 0 && posicaoMario < 80){
      
      cano.style.animation = 'none';
      cano.style.left = `${posicaoCano}px`;
  
      mario.style.animation = 'none';
      mario.style.bottom = `${posicaoMario}px`;
  
      ceu.style.animation = 'none';
      ceu.style.left = `${posicaoCeu}px`;
  
      mario.src = './img/perdeu.png'
      perdeu = true;
      //Reiniciar o jogo
      if (perdeu == true){
        restartButton.style.left = `${34}%`
      }
 
      clearInterval(loop)
    
    }
  }, 10) 

}

botaoIniciar.addEventListener('click', function() {
  // Reinicia a funcionalidade aqui
    iniciar()
    botaoIniciar.style.display = 'none'
    
});


if(botaoIniciar !== 'none'){
  restartButton.style.left = `${-500}px`
}




