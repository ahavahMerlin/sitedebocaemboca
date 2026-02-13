document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.cert-slides');
    const prevBtn = document.querySelector('.cert-prev');
    const nextBtn = document.querySelector('.cert-next');
    const dotsContainer = document.querySelector('.cert-dots');
    
    let currentIndex = 0;
    const totalSlides = 44; // 1.png até 44.png
    
    // CRIAR SLIDES
    for(let i = 1; i <= 44; i++) {
        const slide = document.createElement('div');
        slide.className = 'cert-slide';
        const img = document.createElement('img');
        img.src = `certificados/${i}.png`;
   img.alt = `Certificados de Qualificação Profissional ${i} - DeBocaEmBoca`;
        slide.appendChild(img);
        slidesContainer.appendChild(slide);
    }
    
    // CRIAR DOTS
    for(let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'cert-dot';
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    const dots = document.querySelectorAll('.cert-dot');
    
    function updateCarousel() {
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    // EVENTOS
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // AUTO - 10 SEGUNDOS
    setInterval(nextSlide, 10000);
    
    // INICIAR
    updateCarousel();
});
