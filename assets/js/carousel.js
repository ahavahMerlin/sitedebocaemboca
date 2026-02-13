const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

const startImage = 2;
const endImage = 44;
let currentIndex = 0;

// 1. Criar as imagens
track.innerHTML = ''; // Limpa antes
for (let i = startImage; i <= endImage; i++) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = `certificados/${i}.png`;
   img.alt = `Certificados de Qualificação Profissional- Edison Riella ${i} - DeBocaEmBoca`;
   li.appendChild(img);
    track.appendChild(li);
}

// 2. Função de movimento com segurança
function updateCarousel() {
    const container = document.querySelector('.carousel-track-container');
    if (container) {
        const slideWidth = container.clientWidth;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
}

// 3. Botões
nextBtn.addEventListener('click', () => {
    const slides = track.querySelectorAll('li');
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    const slides = track.querySelectorAll('li');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

// 4. Forçar o carregamento correto
window.addEventListener('load', () => {
    updateCarousel();
    setInterval(() => {
        const slides = track.querySelectorAll('li');
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }, 4000);
});

window.addEventListener('resize', updateCarousel);
