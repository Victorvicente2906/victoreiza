// Função do slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); 
}

function iniciarContagem(dataInicial) {
    const contador = document.getElementById("contador");

    function atualizarContagem() {
        const agora = new Date();
        const diferenca = agora - dataInicial;

        const segundos = Math.floor((diferenca / 1000) % 60);
        const minutos = Math.floor((diferenca / 1000 / 60) % 60);
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const anos = Math.floor(dias / 365);
        const meses = Math.floor((dias % 365) / 30);

        contador.textContent = `${anos} anos, ${meses} meses, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
    }

    atualizarContagem();
    setInterval(atualizarContagem, 1000);
}


const dataInicial = new Date(2023, 9, 20, 9, 10, 0);
iniciarContagem(dataInicial);
