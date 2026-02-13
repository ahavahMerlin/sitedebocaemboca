document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const container = document.querySelector('.carousel-track-container');
    
    let currentIndex = 0;
    let slideWidth = 0;
    
    // CRIAR IMAGENS 2.png até 44.png
    for(let i = 2; i <= 44; i++) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = `certificados/${i}.png`;
   img.alt = `Certificados de Qualificação Profissional- Edison Riella ${i} - DeBocaEmBoca`;
         li.appendChild(img);
        track.appendChild(li);
    }
    
    function init() {
        slideWidth = container.offsetWidth;
        updateCarousel();
    }
    
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
    
    // BOTÕES
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % (track.children.length);
        updateCarousel();
    });
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + track.children.length) % (track.children.length);
        updateCarousel();
    });
    
    // AUTO AVANÇAR - AGORA 8 SEGUNDOS (8000 ms)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % (track.children.length);
        updateCarousel();
    }, 16000); // ← MUDOU DE 4000 PARA 8000 (8 SEGUNDOS)
    
    // INICIAR
    window.addEventListener('load', init);
});
