let banners= ["Banner.homem.jpg", "Banner.campo.jpg"]
let index = 0 ;
let bannerElement = document.getElementById("banners.js");
let intervalo;   

// Espera o conteúdo da página carregar
    window.onload=function  () {
    bannerElement = document.getElementById("banners.js");
    playBanner(); // inicia o banner automaticamente
    

};


// Troca de imagem
  function showNextBanner (){
  index = (index + 1)% banners.length;
    bannerElement.src = banners[index];
}

//Botão de pausa
function pauseBanner() {
    clearInterval(intervalo);
}


//Botão de play
function playBanner() {
    clearInterval(intervalo); // Evitar multíplos intervalos
    intervalo= setInterval(showNextBanner, 4000); // troca a cada 4 segundos
}

