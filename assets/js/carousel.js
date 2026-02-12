const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

const startImage = 2;
const endImage = 44;
let currentIndex = 0;

// 1. Criar as imagens dentro da estrutura correta
for (let i = startImage; i <= endImage; i++) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = `certificados/${i}.png`;
   img.alt = `Certificados de Qualificação Profissional- Edison Riella ${i} - DeBocaEmBoca`;
   li.appendChild(img);
    track.appendChild(li);
}

function updateCarousel() {
    const slideWidth = track.querySelector('li').offsetWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Botão Próximo
nextBtn.addEventListener('click', () => {
    const slides = track.querySelectorAll('li');
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

// Botão Anterior
prevBtn.addEventListener('click', () => {
    const slides = track.querySelectorAll('li');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

// Auto-play (Troca sozinho igual ao exemplo)
let autoPlay = setInterval(() => {
    const slides = track.querySelectorAll('li');
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}, 4000);

// Para o auto-play quando o usuário interage
const stopAutoPlay = () => clearInterval(autoPlay);
nextBtn.addEventListener('mousedown', stopAutoPlay);
prevBtn.addEventListener('mousedown', stopAutoPlay);

// Ajuste de redimensionamento
window.addEventListener('resize', updateCarousel);

// Inicializa no carregamento
window.addEventListener('load', updateCarousel);
